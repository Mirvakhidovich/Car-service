const catchAsync = require("../utils/catchAsync");
const User = require("../models/userModel");
const Vehicle = require("../models/vehicleMode");
const Record = require("../models/recordModel");
const jwt = require("jsonwebtoken");

const signToken = (id) =>
  jwt.sign({ id }, 'secret', {
    expiresIn: "30d",
  });

const createSendToken = (user, statusCode, req, res) => {
  const token = signToken(user.id);

  const cookieOptions = {
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    sameSite: "none",
    secure: true,
    withCredentials: true,
  };

  res.cookie("jwt", token, cookieOptions);
  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    data: user,
  });
};

exports.signup = catchAsync(async (req, res) => {
  const input = {
    username: req.body.username,
    password: req.body.password,
  };

  const user = await User.create(input);

  createSendToken(user, 201, req, res);
});

exports.login = catchAsync(async (req, res) => {
  const input = {
    username: req.body.username,
    password: req.body.password,
  };

  const user = await User.findOne({ username: input.username }).select('+password')

  if (!user) throw new Error("User not found");
  if (user.password !== input.password)
    throw new Error("Password is incorrect");

  createSendToken(user, 200, req, res);
});

exports.logout = catchAsync(async (req, res, next) => {
  const cookieOptions = {
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    sameSite: "none",
    secure: true,
    withCredentials: true,
  };
  res.cookie("jwt", "loggedOut", cookieOptions);
  res.status(200).json({ status: "success", message: "✌️ See you soon!" });
});

exports.protect = catchAsync(async (req, res, next) => {
  let token;

  if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token)
    throw new Error("🔐 You are not logged in! Please log in to access");

  const decoded = await jwt.verify(token, 'secret');

  const user = await User.findById(decoded.id);
  if (!user)
    throw new Error(
      "🔐 The user belonging to this token does no longer exist.",
    );

  req.user = user;
  next();
});

exports.isLoggedIn = catchAsync(async (req, res, next) => {
  if (req.cookies.jwt) {
    const decoded = jwt.verify(req.cookies.jwt, 'secret');
    const user = await User.findById(decoded.id);
    user.password = undefined;

    if (!user) {
      res.status(401).json({
        status: "fail",
        message: "User no longer exists",
      });
    }

    res.status(200).json({
      status: "success",
      data: user,
    });
  } else {
    res.status(401).json({
      status: "error",
      message: "🍪 Please log in first",
    });
  }
});

exports.restrictTo =
  (...roles) =>
    (req, res, next) => {
      if (!roles.includes(req.user.role)) res.status(401).json({
        status: "error",
        message: "⛔ You do not have permission to perform this action!",
      });

      return next();
    };