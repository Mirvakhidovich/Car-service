import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-4xl">Error</h1>
      <p className="text-xl">
        {error.message || "An error occurred while processing your request."}
      </p>
      <button
        onClick={() => navigate("/")}
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white"
      >
        Go Home
      </button>
    </div>
  );
};

export default Error;
