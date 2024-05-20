import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../../features/home/Header";
import { deleteRecord, getRecords } from "../../services/apiAdmin";

const AllRecords = () => {
  const data = useLoaderData();

  const [allRecords, setAllRecords] = useState(data.records);

  useEffect(() => {
    setAllRecords(data.records);
  }, [data]);

  const handleDeleteRecord = async (id) => {
    await deleteRecord(id);

    const updatedRecords = allRecords.filter((record) => record.id !== id);
    setAllRecords(updatedRecords);
  };

  return (
    <div className="flex h-full flex-col gap-8 overflow-scroll p-4">
      <Header />

      <ul className="grid w-full grid-cols-1 gap-4">
        {allRecords.map((record) => (
          <li
            key={record.id}
            className="mx-auto w-full overflow-hidden rounded-xl border bg-white shadow-sm duration-300 hover:shadow-md sm:w-2/3"
          >
            <div className="h-full w-full">
              <div className="flex justify-between border-b p-2">
                <div>
                  <h2 className="text-md font-semibold">
                    {record.serviceType
                      .split("-")
                      .map((word) => word[0].toUpperCase() + word.slice(1))
                      .join(" ")}
                  </h2>
                  <p className="text-sm font-light">Booking ID:{record.id}</p>
                </div>

                <div>
                  <button
                    className="rounded-md bg-red-700 p-1 px-2 text-slate-100"
                    onClick={() => handleDeleteRecord(record.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-1 p-2">
                <p>{record.location}</p>
                <p>{record.amount},000 UZS</p>
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm font-semibold">Vehicle Details</p>

                    {record.vehicle && (
                      <>
                        <p>{record.vehicle.make}</p>
                        <p>{record.vehicle.model}</p>
                        <p>{record.vehicle.licensePlate}</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllRecords;

export const loader = async () => {
  const records = await getRecords();
  return { records };
};
