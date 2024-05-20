import React, { useState } from "react";
import { getService } from "../../services/apiServices";
import {
  Form,
  NavLink,
  redirect,
  useLoaderData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { createBooking } from "../../services/apiRecords";
import { getVehicles } from "../../services/apiVehicles";
import { BiArrowBack } from "react-icons/bi";
import {
  HiCheckCircle,
  HiOutlineIdentification,
  HiMapPin,
} from "react-icons/hi2";
import Confirmation from "./Confirmation";
import BookingNavigation from "./BookingNavigation";
import SelectPayment from "./SelectPayment";
import SelectDate from "./SelectDate";
import ServiceDetails from "./ServiceDetails";
import PageNavigation from "./PageNavigation";

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
];

const CreateBooking = () => {
  const { service, vehicles } = useLoaderData();

  const [page, setPage] = useState(1);
  const [selectedDate, setSelectedDate] = useState(dates[0]);
  const [selectedTime, setSelectedTime] = useState(pickUpTimes[0]);
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("");

  const navigation = useNavigation();
  const isSubmitting = navigation.action === "submitting";

  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <Form method="POST" className="relative flex h-full flex-col gap-4 p-4">
      <PageNavigation
        page={page}
        setPage={setPage}
        serviceTitle={service.heading}
      />

      {/* 1-PAGE: Service Details */}
      <ServiceDetails service={service} page={page} />

      {/* 2-PAGE: Select Date */}
      <SelectDate
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
        page={page}
        vehicles={vehicles}
        selectedVehicle={selectedVehicle}
        setSelectedVehicle={setSelectedVehicle}
      />

      {/* 3-PAGE: Select Payment */}
      <SelectPayment
        selectedPayment={selectedPayment}
        setSelectedPayment={setSelectedPayment}
        page={page}
        service={service}
      />

      {/* 4-PAGE: Confirmation */}
      <Confirmation page={page} />

      <BookingNavigation
        page={page}
        service={service}
        handleNext={handleNext}
        isSubmitting={isSubmitting}
        selectedVehicle={selectedVehicle}
        selectedPayment={selectedPayment}
      />
    </Form>
  );
};

export async function loader({ params }) {
  const service = await getService(params.serviceId);
  const vehicles = await getVehicles();
  return { service, vehicles };
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());

  const booking = {
    serviceType: data.serviceType,
    location: data.location,
    serviceDate: data.serviceDate,
    pickUpTime: data.pickUpTime,
    paymentMethod: data.paymentMethod,
    amount: data.amount,
    vehicle: data.vehicle,
  };

  await createBooking(booking);

  return redirect("/records");
}

export default CreateBooking;
