import React from "react";

const BookingNavigation = ({
  page,
  service,
  handleNext,
  isSubmitting,
  selectedVehicle,
  selectedPayment,
}) => {
  return (
    <>
      <div className="h-[8%] w-full"></div>
      <div
        className="absolute bottom-0 left-0 flex h-fit w-full items-center justify-between bg-white px-4"
        style={page === 4 ? { display: "none" } : { display: "flex" }}
      >
        <div>
          <h2>{service.heading}</h2>
          <p className="text-xl font-semibold">$ {service.price}</p>
        </div>

        {page === 4 ? (
          <button
            type="submit"
            className="rounded bg-blue-500 p-2 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "PAY"}
          </button>
        ) : (
          <button
            type="button"
            className="rounded bg-blue-500 p-2 px-6 text-white"
            onClick={handleNext}
            disabled={
              (page === 2 && !selectedVehicle) ||
              (page === 3 && !selectedPayment)
            }
          >
            {page === 1 && "ADD"}
            {page === 2 && "PROCEED"}
            {page === 3 && "PAY"}
          </button>
        )}
      </div>
    </>
  );
};

export default BookingNavigation;
