import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { HiHome, HiMiniNewspaper } from "react-icons/hi2";
import { GiSteeringWheel } from "react-icons/gi";
import { apiLogout } from "../services/apiAuth";

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

const Sidebar = ({ isAdmin }) => {
  const navigation = useNavigate();

  const logout = async () => {
    await apiLogout();
    navigation("/login");
  };

  return (
    <aside className="hidden h-full bg-white p-4 shadow-md sm:block">
      <div className="flex h-1/6 w-full items-start">
        <h1 className="text-4xl font-light uppercase text-blue-700">
          Master service
        </h1>
      </div>

      <div className="flex h-5/6 flex-col gap-3">
        {isAdmin ? (
          adminLinks.map((link) => (
            <SidebarItem
              icon={link.icon}
              text={link.text}
              to={link.to}
              key={link.to}
            />
          ))
        ) : (
          <>
            <SidebarItem
              icon={<HiHome className="text-2xl" />}
              text="Home"
              to="/"
            />
            <SidebarItem
              icon={<GiSteeringWheel className="text-2xl" />}
              text="Vehicles"
              to="/vehicles"
            />
            <SidebarItem
              icon={<HiMiniNewspaper className="text-2xl" />}
              text="Records"
              to="/records"
            />
          </>
        )}

        <div className="mt-auto flex flex-col gap-4">
          <button
            className="flex flex-row items-center gap-2 rounded-md border bg-red-700 p-1 px-2 text-slate-100"
            onClick={() => logout()}
          >
            <h2 className="text-lg">Logout</h2>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

const SidebarItem = ({ icon, text, to }) => {
  return (
    <NavLink
      className={({ isActive }) => {
        return isActive
          ? "flex flex-row items-center gap-2 rounded-md border bg-blue-700 p-1 px-2 text-slate-100"
          : "flex flex-row items-center gap-2 rounded-md  p-1 px-2";
      }}
      to={to}
    >
      {icon}
      <h2 className="text-lg font-light">{text}</h2>
    </NavLink>
  );
};
