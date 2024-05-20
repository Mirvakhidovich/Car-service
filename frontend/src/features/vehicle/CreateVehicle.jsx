import React from "react";

import { Form, NavLink, redirect, useNavigation } from "react-router-dom";
import { createVehicle } from "../../services/apiVehicles";
import { BiArrowBack } from "react-icons/bi";
import {
  randomColor,
  randomLicensePlate,
  randomMake,
  randomModel,
  randomYear,
} from "../../utils/constants";

const CreateVehicle = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.action === "submitting";

  return (
    <Form method="POST" className="relative flex h-full flex-col gap-4 p-4">
      <NavLink className="flex items-center gap-4" to="/">
        <BiArrowBack className="cursor-pointer text-lg" />
        <h1 className="text-lg">Add Vehicle</h1>
      </NavLink>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="make">Make</label>
          <input
            type="text"
            name="make"
            id="make"
            placeholder="Make"
            className="p-2"
            defaultValue={randomMake()}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="model">Model</label>
          <input
            type="text"
            name="model"
            id="model"
            placeholder="Model"
            className="p-2"
            defaultValue={randomModel()}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="year">Year</label>
          <input
            type="number"
            name="year"
            id="year"
            placeholder="Year"
            className="p-2"
            defaultValue={randomYear()}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="color">Color</label>
          <input
            type="text"
            name="color"
            id="color"
            placeholder="Color"
            className="p-2"
            defaultValue={randomColor()}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="licensePlate">License Plate</label>
          <input
            type="text"
            name="licensePlate"
            id="licensePlate"
            placeholder={randomLicensePlate()}
            className="p-2"
            defaultValue={randomLicensePlate()}
          />
        </div>

        <button
          type="submit"
          className="rounded bg-blue-500 p-2 text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Create Vehicle"}
        </button>
      </div>
    </Form>
  );
};

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());

  const vehicle = {
    make: data.make,
    model: data.model,
    year: data.year,
    color: data.color,
    licensePlate: data.licensePlate,
  };

  const newVehicle = await createVehicle(vehicle);

  if (newVehicle) {
    return redirect(`/vehicles`);
  }

  return {
    status: 400,
    error: "Create Vehicle failed",
  };
}

export default CreateVehicle;
