import { NavLink, Outlet, useNavigation } from "react-router-dom";
import { BiSupport } from "react-icons/bi";

import BottomBar from "../ui/BottomBar";
import Loader from "../ui/Loader";
import Sidebar from "../ui/Sidebar";
import { useEffect, useState } from "react";
import { apiCheckAuth } from "../services/apiAuth";

const AppLayout = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const response = await apiCheckAuth();

      if (response.data.role === "admin") {
        setIsAdmin(true);
      }
    };

    checkAuth();
  }, []);

  return (
    <div className="grid h-[100dvh] w-[100dvw] grid-rows-[90%_auto] bg-slate-100 sm:grid-cols-[20%_auto_22%] sm:grid-rows-1">
      <Sidebar isAdmin={isAdmin} />

      <main className="h-full w-full">
        <Outlet />
      </main>

      <div className="relative hidden h-full w-full flex-col gap-4 p-2 sm:flex">
        <div className="h-3/5 w-full rounded-lg bg-slate-200"></div>
        <div className="h-2/5 w-full rounded-lg bg-slate-200"></div>

        <NavLink
          className="absolute bottom-4 right-4 flex flex-row items-center gap-2 rounded-full border bg-yellow-400 p-2"
          to="/support"
        >
          <BiSupport className="h-8 w-8 text-gray-800" />
        </NavLink>
      </div>

      <BottomBar isAdmin={isAdmin} />
    </div>
  );
};

export default AppLayout;
