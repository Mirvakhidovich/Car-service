import React from "react";
import { getRecord } from "../../services/apiRecords";
import { NavLink, useLoaderData, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const Track = () => {
  const record = useLoaderData();

  return (
    <div className="flex h-full flex-col gap-4 overflow-scroll p-4">
      <NavLink className="flex items-center gap-4" to="/">
        <BiArrowBack className="cursor-pointer text-lg" />
        <h1 className="text-lg">Track Booking ID: {record.id}</h1>
      </NavLink>
      <div className="flex h-fit w-full flex-col gap-2 rounded-md bg-white p-2 shadow-sm">
        <div className="flex justify-between">
          <div>
            <h2 className="text-md font-medium">
              {record.serviceType
                .split("-")
                .map((word) => word[0].toUpperCase() + word.slice(1))
                .join(" ")}
            </h2>
            <p className="text-sm font-light opacity-50">
              Booking ID:{record.id}
            </p>
          </div>

          <img
            src={`/images/services/${record.serviceType}.svg`}
            alt={record.vehicle.model}
            className="h-14"
          />
        </div>
        <h2 className="text-md font-medium">
          {record.vehicle.make} {record.vehicle.model}
        </h2>

        <div className="flex justify-between">
          <div className="flex flex-col text-xs font-medium opacity-50">
            <p>DATE</p>
            <p className="font-light">{record.serviceDate}</p>
          </div>
          <div className="flex flex-col text-xs font-medium opacity-50">
            <p>PICK-UP TIME</p>
            <p className="font-light">{record.pickUpTime}</p>
          </div>
        </div>

        <div className="flex justify-between text-sm font-medium opacity-50">
          <p>Estimated Completion:</p>
          <span className="text-sm font-light">
            {record.serviceDate} {record.pickUpTime}
          </span>
        </div>
      </div>

      <div className="flex h-full flex-col gap-6">
        <h2 className="text-md font-medium">Service Status</h2>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-green-500"></div>
            <p>Parts Arrived</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-green-500"></div>
            <p>Installation</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-green-500"></div>
            <p>Final Inspection</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-green-500"></div>
            <p>Ready for Drop</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-green-500"></div>
            <p>Dropped</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function loader({ params }) {
  const records = await getRecord(params.recordId);
  return records;
}

export default Track;
