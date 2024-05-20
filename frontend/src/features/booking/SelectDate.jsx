import React from "react";
import { HiMapPin } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

const pickUpTimes = [
  {
    time: "08:00",
    to: "08:30 AM",
  },
  {
    time: "08:30",
    to: "09:00 AM",
  },
  {
    time: "09:00",
    to: "09:30 AM",
  },
  {
    time: "09:30",
    to: "10:00 AM",
  },
  {
    time: "10:00",
    to: "10:30 AM",
  },
  {
    time: "10:30",
    to: "11:00 AM",
  },
  {
    time: "11:00",
    to: "11:30 AM",
  },
  {
    time: "11:30",
    to: "12:00 PM",
  },
  {
    time: "12:00",
    to: "12:30 PM",
  },
  {
    time: "12:30",
    to: "01:00 PM",
  },
  {
    time: "01:00",
    to: "01:30 PM",
  },
  {
    time: "01:30",
    to: "02:00 PM",
  },
];

const dates = [
  {
    date: new Date().toISOString().split("T")[0],
    day: "Today",
  },
  {
    date: new Date(Date.now() + 86400000).toISOString().split("T")[0],
    day: "Tomorrow",
  },
  {
    date: new Date(Date.now() + 86400000 * 2).toISOString().split("T")[0],
    day: "Day After",
  },
  {
    date: new Date(Date.now() + 86400000 * 3).toISOString().split("T")[0],
    day: "In 3 days",
  },
];

const SelectDate = ({
  page,
  vehicles,
  selectedVehicle,
  setSelectedVehicle,
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
}) => {
  return (
    <div className={`h-full w-full overflow-scroll ${page !== 2 && "hidden"}`}>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Select Vehicle</h2>

          <div className="flex flex-wrap gap-2">
            {vehicles.map((vehicle) => (
              <div key={vehicle.id} className="flex flex-col items-center">
                <input
                  type="radio"
                  name="vehicle"
                  id={vehicle.id}
                  value={vehicle.id}
                  className="hidden"
                />
                <label
                  htmlFor={vehicle.id}
                  className={`flex flex-col items-center justify-center rounded border border-slate-300 p-2 ${
                    selectedVehicle.id === vehicle.id &&
                    "border-slate-500 bg-blue-100 text-blue-800"
                  }`}
                  onClick={() => setSelectedVehicle(vehicle)}
                >
                  <span>{vehicle.model}</span>
                </label>
              </div>
            ))}
          </div>

          {selectedVehicle.length === 0 && vehicles.length !== 0 && (
            <div className="text-red-500">
              <span>No vehicle selected</span>
            </div>
          )}

          {vehicles.length === 0 && (
            <NavLink to="/vehicles/new" className="text-blue-500">
              <span>Please add a vehicle</span>
            </NavLink>
          )}
        </div>

        <div className="flex flex-col gap-4 sm:w-1/2">
          <div className="flex items-center gap-2 rounded-md bg-white px-1">
            <HiMapPin className="text-2xl" />
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Tashkent, Uzbekistan, 100000"
              className="w-full rounded p-2 outline-none"
              defaultValue="Tashkent, Uzbekistan, 100000"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">
            When do you want the service?
          </h2>

          <div className="flex flex-col gap-2">
            <h3>Select Date</h3>

            <div className="flex justify-between sm:justify-start sm:gap-6">
              {dates.map((date) => (
                <div key={date.date} className="flex flex-col items-center">
                  <input
                    type="radio"
                    name="serviceDate"
                    id={date.date}
                    value={date.date}
                    checked={selectedDate.date === date.date}
                    onChange={() => setSelectedDate(date)}
                    className="hidden"
                  />
                  <label
                    htmlFor={date.date}
                    className={`flex w-full flex-col items-center justify-center rounded-md border border-slate-300 p-2 text-sm font-semibold ${
                      selectedDate.date === date.date &&
                      "border-slate-500 bg-blue-100 text-blue-800"
                    }`}
                  >
                    <span>{date.day}</span>
                    <span>{date.date.split("-")[2]}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3>Select Time</h3>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {pickUpTimes.map((time) => (
                <div key={time.time} className="flex">
                  <input
                    type="radio"
                    name="pickUpTime"
                    id={time.time}
                    value={time.time}
                    checked={selectedTime.time === time.time}
                    onChange={() => setSelectedTime(time)}
                    className="hidden"
                  />
                  <label
                    htmlFor={time.time}
                    className={`flex w-full items-center justify-center rounded border border-slate-300 p-2 ${
                      selectedTime.time === time.time &&
                      "border-slate-500 bg-blue-100 text-blue-800"
                    }`}
                  >
                    <span>{time.time}</span>-<span>{time.to}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectDate;
