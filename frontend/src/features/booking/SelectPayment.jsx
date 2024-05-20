import React from "react";

const SelectPayment = ({
  page,
  service,
  selectedPayment,
  setSelectedPayment,
}) => {
  return (
    <div
      className={`flex h-full w-full flex-col items-center ${page !== 3 && "hidden"}`}
    >
      <div className="flex w-full flex-col gap-2 border-b py-4">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold">Service Total</h2>
          <p>{service.price - 5},000 UZS</p>
        </div>
        <div className="flex items-center justify-between">
          <h2>Convenience Fee</h2>
          <p>5,000 UZS</p>
        </div>
      </div>

      <div className="flex w-full flex-col gap-2 border-b py-4">
        <div className="flex items-center justify-between font-semibold">
          <h2>Service Amount Payable</h2>
          <p>{service.price},000 UZS</p>

          <input type="hidden" name="amount" value={service.price} />
          <input type="hidden" name="currency" value="USD" />
          <input type="hidden" name="serviceType" value={service.link} />
        </div>
      </div>

      <div className="flex w-full flex-col gap-4 py-4">
        <h2 className="text-lg font-semibold">Select Payment Method</h2>

        <div className="flex flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="paymentMethod"
              id="click"
              value="click"
              className="hidden"
            />
            <label
              htmlFor="click"
              className={`flex items-center justify-center rounded border border-slate-300 ${
                selectedPayment === "click" &&
                "border-slate-500 bg-blue-100 text-blue-800"
              }`}
              onClick={() => setSelectedPayment("click")}
            >
              <img
                src="https://api.logobank.uz/media/logos_preview/Click-01.png"
                alt="Click"
                className="h-12 w-20 object-cover"
              />
            </label>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="paymentMethod"
              id="payme"
              value="paypal"
              className="hidden"
            />
            <label
              htmlFor="payme"
              className={`flex items-center justify-center rounded border border-slate-300 ${
                selectedPayment === "payme" &&
                "border-slate-500 bg-blue-100 text-blue-800"
              }`}
              onClick={() => setSelectedPayment("payme")}
            >
              <img
                src="https://api.logobank.uz/media/logos_preview/payme-01.png"
                alt="PayMe"
                className="h-12 w-20 object-cover"
              />
            </label>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="paymentMethod"
              id="card"
              value="card"
              className="hidden"
            />
            <label
              htmlFor="card"
              className={`flex items-center justify-center rounded border border-slate-300 ${
                selectedPayment === "card" &&
                "border-slate-500 bg-blue-100 text-blue-800"
              }`}
              onClick={() => setSelectedPayment("card")}
            >
              <img
                src="https://api.logobank.uz/media/logos_preview/Uzcard-01.png"
                alt="PayMe"
                className="h-12 object-cover"
              />
            </label>
          </div>
        </div>

        {selectedPayment.length < 1 && (
          <div className="text-red-500">
            <span>No payment method selected</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectPayment;
