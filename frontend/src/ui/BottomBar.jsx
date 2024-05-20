import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { GiSteeringWheel } from "react-icons/gi";
import { HiHome, HiMiniNewspaper } from "react-icons/hi2";
import { BiSupport } from "react-icons/bi";
import { apiCheckAuth } from "../services/apiAuth";

const adminLinks = [
  {
    icon: <HiHome className="text-3xl" />,
    text: "Home",
    to: "/admin/dashboard",
  },
  {
    icon: <GiSteeringWheel className="text-3xl" />,
    text: "Vehicles",
    to: "/admin/vehicles",
  },
  {
    icon: <HiMiniNewspaper className="text-3xl" />,
    text: "Records",
    to: "/admin/records",
  },
];

const BottomBar = ({ isAdmin }) => {
  const { serviceId } = useParams();

  return (
    <div
      className={`grid h-full w-full gap-4 border bg-white py-2 text-gray-50 sm:hidden ${isAdmin ? "grid-cols-3" : "grid-cols-4"}`}
      style={serviceId ? { pointerEvents: "none" } : {}}
    >
      {isAdmin ? (
        adminLinks.map((link) => (
          <BottomBarItem
            icon={link.icon}
            text={link.text}
            to={link.to}
            key={link.to}
          />
        ))
      ) : (
        <>
          <BottomBarItem
            icon={<HiHome className="text-3xl" />}
            text="Home"
            to="/"
          />
          <BottomBarItem
            icon={<GiSteeringWheel className="text-3xl" />}
            text="Vehicles"
            to="/vehicles"
          />
          <BottomBarItem
            icon={<HiMiniNewspaper className="text-3xl" />}
            text="Records"
            to="/records"
          />
          <BottomBarItem
            icon={<BiSupport className="text-3xl" />}
            text="Support"
            to="/support"
          />
        </>
      )}
    </div>
  );
};

export default BottomBar;

const BottomBarItem = ({ icon, text, to }) => {
  return (
    <NavLink
      className={({ isActive }) => {
        return isActive
          ? "flex flex-col items-center justify-center text-blue-600"
          : "flex flex-col items-center justify-center text-gray-400";
      }}
      to={to}
    >
      {icon}
      <h2 className="text-xs">{text}</h2>
    </NavLink>
  );
};
