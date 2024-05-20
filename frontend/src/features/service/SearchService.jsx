import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { searchRecords } from "../../services/apiRecords";
import { format } from "date-fns";

const SearchService = () => {
  const [query, setQuery] = useState("");
  const [records, setRecords] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;

    const fetchRecords = async () => {
      const records = await searchRecords(query);
      setRecords(records);
    };

    fetchRecords();
  };

  // if outside of ul click, close the search results

  const handleClick = (e) => {
    if (e.target.tagName === "INPUT") return;
    setRecords([]);
  };

  window.addEventListener("click", handleClick);

  return (
    <div className="relative">
      <form
        className="flex w-full overflow-hidden rounded-lg border bg-white px-2 shadow-sm sm:h-fit sm:w-fit"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="w-full p-1 outline-none sm:py-2"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button>
          <HiMagnifyingGlass className="text-lg text-gray-500" />
        </button>
      </form>
      <ul className="absolute right-0 top-12 grid w-full min-w-[40dvw] grid-cols-1 gap-4">
        {records.length > 0 &&
          records.map((record) => (
            <li
              key={record.id}
              className="mx-auto h-fit w-full overflow-hidden rounded-xl border bg-white shadow-sm duration-300 hover:shadow-md sm:w-2/3"
            >
              <NavLink
                to={`/records/past/${record.id}`}
                className="h-full w-full"
              >
                <div className="flex flex-col border-b p-2">
                  <h2 className="text-md font-semibold">
                    {record.serviceType
                      .split("-")
                      .map((word) => word[0].toUpperCase() + word.slice(1))
                      .join(" ")}
                  </h2>
                  <p className="text-sm font-light">Booking ID:{record.id}</p>
                </div>

                <div className="flex flex-col p-2">
                  <p className="text-sm font-light">
                    Vehicle: {record.vehicle.make} {record.vehicle.model}
                  </p>
                  <p className="text-sm font-light">
                    License Plate: {record.vehicle.licensePlate}
                  </p>
                </div>

                <div className="flex justify-between p-2">
                  <p className="text-sm font-light">
                    Date: {record.serviceDate}
                  </p>
                  <p className="text-sm font-light">
                    Time: {record.pickUpTime}
                  </p>
                </div>
              </NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SearchService;
