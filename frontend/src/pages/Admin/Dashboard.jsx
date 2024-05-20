import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../../features/home/Header";
import { getSummary } from "../../services/apiAdmin";

const Dashboard = () => {
  const summary = useLoaderData();

  return (
    <div className="flex h-full flex-col gap-8 overflow-scroll p-4">
      <Header />

      <ul className="grid w-full grid-cols-1 gap-4">
        {summary.map((user) => (
          <li
            key={user.username}
            className="mx-auto w-full overflow-hidden rounded-xl border bg-white shadow-sm duration-300 hover:shadow-md sm:w-2/3"
          >
            <div className="h-full w-full">
              <div className="flex flex-col gap-1 border-b p-2">
                <h2 className="text-md font-semibold">{user.username}</h2>

                <span className="h-0.5 w-full bg-gray-200"></span>

                <span className="text-sm font-light">User Details</span>

                <p className="pl-2 text-sm font-light">
                  Vehicles: {user.vehiclesCount}
                </p>
                <p className="pl-2 text-sm font-light">
                  Bookings: {user.recordsCount}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;

export async function loader() {
  const summary = await getSummary();

  return summary;
}
