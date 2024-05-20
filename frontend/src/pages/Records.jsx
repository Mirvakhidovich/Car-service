import { NavLink, useLoaderData } from "react-router-dom";
import { deleteRecord, getRecords } from "../services/apiRecords";
import Header from "../features/home/Header";
import { useEffect, useState } from "react";

const Records = () => {
  const records = useLoaderData();

  const [allRecords, setAllRecords] = useState(records);

  useEffect(() => {
    setAllRecords(records);
  }, [records]);

  const handleDeleteRecord = async (id) => {
    await deleteRecord(id);

    const updatedRecords = allRecords.filter((record) => record.id !== id);
    setAllRecords(updatedRecords);
  };

  return (
    <div className="flex h-full flex-col gap-8 overflow-scroll p-4">
      <Header />

      <ul className="grid w-full grid-cols-1 gap-4">
        {allRecords.length > 0 ? (
          allRecords.map((record) => (
            <li
              key={record.id}
              className="mx-auto w-full overflow-hidden rounded-xl border bg-white shadow-sm duration-300 hover:shadow-md sm:w-2/3"
            >
              <div className="h-full w-full">
                <NavLink
                  to={`/records/past/${record.id}`}
                  className="flex flex-col border-b p-2"
                >
                  <h2 className="text-md font-semibold">
                    {record.serviceType
                      .split("-")
                      .map((word) => word[0].toUpperCase() + word.slice(1))
                      .join(" ")}
                  </h2>
                  <p className="text-sm font-light">Booking ID:{record.id}</p>
                </NavLink>
                <NavLink
                  to={`/records/past/${record.id}`}
                  className="flex flex-col gap-1 p-2"
                >
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

                    <div>
                      <p className="text-sm font-semibold">Pickup Time</p>
                      <p>{record.serviceDate}</p>
                      <p>{record.pickUpTime}</p>
                    </div>
                  </div>
                </NavLink>

                <div className="flex border-t">
                  <button
                    className="w-full p-2 text-red-500"
                    onClick={() => handleDeleteRecord(record.id)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </li>
          ))
        ) : (
          <li className="mx-auto w-full overflow-hidden rounded-xl border bg-white shadow-sm sm:w-2/3">
            <div className="flex flex-col items-center justify-center p-4">
              <p className="text-lg font-semibold">No Records Found</p>
              <p className="text-sm font-light">Try booking a service</p>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
};

export async function loader() {
  const records = await getRecords();

  return records;
}

export default Records;
