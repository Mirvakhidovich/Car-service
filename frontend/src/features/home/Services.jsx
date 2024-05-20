import React from "react";
import { NavLink } from "react-router-dom";
import { MdLocalCarWash } from "react-icons/md";

const Services = ({ services }) => {
  return (
    <div className="flex h-full w-full flex-col gap-2">
      <h2 className="text-md font-semibold">Select Service</h2>

      <div className="grid h-full w-full grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-3">
        {services.map((service, index) => (
          <ServiceItem
            key={index}
            icon={service.link}
            heading={service.heading}
            paragraph={service.paragraph}
            id={service.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;

const ServiceItem = ({ icon, heading, id }) => {
  return (
    <NavLink
      className="flex h-full w-full flex-col items-center justify-start gap-2 rounded-xl border bg-white p-2 py-3 shadow-sm duration-300 hover:shadow-md sm:h-40 sm:justify-center"
      to={`/booking/${id}/new`}
    >
      <img
        src={`/images/services/${icon}.svg`}
        alt={heading}
        className="h-8 w-8 sm:h-12 sm:w-12"
      />

      <h2 className="text-balance text-center text-xs font-light">{heading}</h2>
    </NavLink>
  );
};
