import React from "react";

const Loader = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="loader flex h-32 w-32 animate-pulse items-center justify-center rounded-full border-8 border-t-8 border-gray-200 ease-linear">
        <span className="text-gray-400">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
