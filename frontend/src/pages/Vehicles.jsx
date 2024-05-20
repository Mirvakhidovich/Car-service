import { NavLink, useLoaderData, useNavigate } from "react-router-dom";
import { deleteVehicle, getVehicles } from "../services/apiVehicles";
import Header from "../features/home/Header";
import { useEffect, useState } from "react";

const Vehicles = () => {
  const vehicles = useLoaderData();

  const [allVehicles, setAllVehicles] = useState(vehicles);

  useEffect(() => {
    setAllVehicles(vehicles);
  }, [vehicles]);

  const handleDeleteVehicle = async (id) => {
    await deleteVehicle(id);

    const updatedVehicles = allVehicles.filter((vehicle) => vehicle.id !== id);
    setAllVehicles(updatedVehicles);
  };

  return (
    <div className="flex h-full flex-col gap-8 overflow-scroll p-4">
      <Header />
      <ul className="grid w-full grid-cols-1 gap-4">
        {allVehicles.length > 0 ? (
          allVehicles.map((vehicle) => (
            <li
              key={vehicle.id}
              className="mx-auto w-full overflow-hidden rounded-xl border bg-white shadow-sm sm:w-2/3"
            >
              <div className="flex justify-between border-b p-2 pr-0">
                <div>
                  <h2 className="text-md font-semibold">{vehicle.make}</h2>
                  <p className="text-sm font-light">{vehicle.model}</p>

                  <p className="text-sm font-normal">License Plate:</p>
                  <p className="text-sm font-normal">{vehicle.licensePlate}</p>
                </div>

                <img
                  src="/images/car.png"
                  alt={vehicle.model}
                  className="h-24"
                />
              </div>
              <div className="flex border-t">
                <button
                  className="w-full p-2 text-red-500 duration-300 hover:shadow-md"
                  onClick={() => handleDeleteVehicle(vehicle.id)}
                >
                  DELETE
                </button>
              </div>
            </li>
          ))
        ) : (
          <li className="mx-auto w-full overflow-hidden rounded-xl border bg-white shadow-sm sm:w-2/3">
            <div className="flex justify-center p-4">
              <p className="text-lg font-semibold">No vehicles found!</p>
            </div>
          </li>
        )}
      </ul>

      <div className="flex justify-center p-4">
        <NavLink
          className="rounded bg-blue-500 p-2 text-white"
          to="/vehicles/new"
        >
          Add Vehicle
        </NavLink>
      </div>
    </div>
  );
};

export async function loader() {
  const records = await getVehicles();

  return records;
}

export default Vehicles;
