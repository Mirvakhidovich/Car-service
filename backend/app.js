const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

const usersRouter = require("./routes/userRoutes");
const vehiclesRouter = require("./routes/vehicleRoutes");
const recordsRouter = require("./routes/recordRoutes");
const adminRouter = require("./routes/adminRoutes")
const { errorHandler } = require("./controllers/errorController");

// App
const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://electric-car-service.vercel.app",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(morgan('tiny'));

// Routes
app.use("/users", usersRouter);
app.use("/vehicles", vehiclesRouter);
app.use("/records", recordsRouter);
app.use("/admin", adminRouter);

// Error handler
app.use(errorHandler);

// Mongoose
mongoose.connect('mongodb+srv://db-admin:Rk2XLs42YGRpb0XW@cluster0.osrizna.mongodb.net/car-service?retryWrites=true&w=majority').then(() => {
  console.log("🌱 DATABASE CONNECTION SUCCESSFUL");
});

// Server
const port = 8080;
app.listen(port, () => {
  console.log("🌱 Server is listening on port " + port);
});
