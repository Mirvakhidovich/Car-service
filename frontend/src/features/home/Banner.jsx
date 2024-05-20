import React from "react";

const Banner = () => {
  return (
    <div className="flex h-1/4 w-full sm:h-1/3">
      <img
        src="images/banner.jpeg"
        className="h-full w-full rounded-lg object-cover"
        alt="Banner"
      />
    </div>
  );
};

export default Banner;
