import React from "react";
import { NavLink } from "react-router-dom";

const Confirmation = ({ page }) => {
  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center gap-4 ${page !== 4 && "hidden"}`}
    >
      <h1>Booking Successful</h1>
      <p>Thank you for booking with us.</p>
      <NavLink to="/" className="rounded bg-blue-500 p-2 text-white">
        GO TO HOME
      </NavLink>
    </div>
  );
};

export default Confirmation;
