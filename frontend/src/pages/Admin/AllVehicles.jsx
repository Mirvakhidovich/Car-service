import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../../features/home/Header";
import { getVehicles } from "../../services/apiAdmin";

const AllVehicles = () => {
  const allVehicles = useLoaderData();

  return (
    <div className="flex h-full flex-col gap-8 overflow-scroll p-4">
      <Header />

      <ul className="grid w-full grid-cols-1 gap-4">
        {allVehicles.map((vehicle) => (
          <li
            key={vehicle.licensePlate}
            className="mx-auto w-full overflow-hidden rounded-xl border bg-white shadow-sm duration-300 hover:shadow-md sm:w-2/3"
          >
            <div className="h-full w-full">
              <div className="flex flex-col gap-1 border-b p-2">
                <h2 className="text-md font-semibold">
                  {vehicle.make} {vehicle.model}
                </h2>

                <span className="h-0.5 w-full bg-gray-200"></span>

                <span className="text-sm font-light">Vehicle Details</span>

                <p className="pl-2 text-sm font-light">
                  License Plate: {vehicle.licensePlate}
                </p>
                <p className="pl-2 text-sm font-light">Year: {vehicle.year}</p>
                <p className="pl-2 text-sm font-light">Owner: {vehicle.user}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllVehicles;

export async function loader() {
  const vehicles = await getVehicles();

  return vehicles;
}
