import React, { useEffect, useState } from "react";
import SearchService from "../service/SearchService";
import { useNavigate } from "react-router-dom";
import { apiLogout } from "../../services/apiAuth";

const Header = ({ isHome }) => {
  const navigation = useNavigate();

  const logout = async () => {
    await apiLogout();
    navigation("/login");
  };

  const [user, setUser] = useState({});

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      navigation("/login");
    }

    setUser(user);
  }, [navigation]);

  return (
    <header className="relative flex w-full flex-col justify-between gap-2 sm:flex-row sm:items-center">
      <div className="flex flex-row items-center justify-between gap-2 sm:flex-row-reverse sm:gap-4">
        <div className="flex flex-col">
          <p className="text-sm font-bold">Welcome {user.username}</p>
          <h2 className="text-md font-ligh">Tashkent, UZ</h2>
        </div>

        <button
          className="ml-auto flex h-fit rounded-md border px-2 text-slate-800 sm:hidden"
          onClick={() => logout()}
        >
          <h2 className="text-lg">Logout</h2>
        </button>

        <img
          src="https://placehold.co/400x400"
          alt="User"
          className="h-10 w-10 rounded-full"
        />
      </div>

      {isHome && <SearchService />}
    </header>
  );
};

export default Header;
