import React from "react";
import { HiCheckCircle } from "react-icons/hi2";

const ServiceDetails = ({ page, service }) => {
  return (
    <div
      className={`flex h-full flex-col gap-4 overflow-scroll ${page !== 1 && "hidden"}`}
    >
      <div className="w-full border-b py-2">
        <h2 className="font-semibold">{service.heading}</h2>
        <p>{service.paragraph}</p>
      </div>
      <div className=" w-full">
        <h2>What&apos;s included?</h2>

        <div className="flex items-center gap-4 p-4">
          {
            <ul className="flex list-disc flex-col gap-2">
              {service.inclusions.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <HiCheckCircle className="text-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          }
        </div>
      </div>

      <div className="flex h-fit w-full flex-col gap-2">
        <h2>Customer Reviews</h2>

        <div className="m-4 flex flex-col gap-1 rounded-md border p-2 sm:w-1/2">
          <h3>John Doe</h3>
          <p>
            The {service.heading} package is a good choice to keep normal things
            in check. Highly recommended!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
