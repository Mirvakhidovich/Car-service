import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { NavLink, useNavigate } from "react-router-dom";

const PageNavigation = ({ page, setPage, serviceTitle }) => {
  const navigate = useNavigate();

  if (page === 2) {
    return (
      <div className="flex items-center gap-4">
        <BiArrowBack
          onClick={() => setPage(1)}
          className="cursor-pointer text-lg"
        />
        <h1 className="text-lg">Checkout</h1>
      </div>
    );
  }

  if (page === 3) {
    return (
      <div className="flex items-center gap-4">
        <BiArrowBack
          onClick={() => setPage(2)}
          className="cursor-pointer text-lg"
        />
        <h1 className="text-lg">Payment</h1>
      </div>
    );
  }

  return (
    <NavLink className="flex items-center gap-4" to="/">
      <BiArrowBack className="cursor-pointer text-lg" />
      <h1 className="text-lg">{serviceTitle}</h1>
    </NavLink>
  );
};

export default PageNavigation;
