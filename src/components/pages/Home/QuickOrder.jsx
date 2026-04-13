import React from "react";
import { Link } from "react-router-dom";
import { brandAssets } from "../../../data/menuData";
import Button from "../../ui/Button";

const QuickOrder = () => {
  return (
    <section className="page-section">
      <div className="theme-container">
        <div className="grid gap-8 rounded-[2rem] bg-white  shadow-lg sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:p-10">
          <div className="space-y-6">
            <span className="theme-pill">Reservation</span>
            <h2 className="max-w-xl text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
              Do you have any dinner plan today? Reserve your table
            </h2>
            <p className="max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              Make online reservations, read restaurant reviews from diners and enjoy a premium restaurant flow that feels calm across desktop and mobile.
            </p>
            <Button as={Link} to="/checkout">
              Make Reservation
            </Button>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-6 rounded-full bg-orange-100 blur-3xl" />
            <img
              src={brandAssets.reservationImage}
              alt="Reservation dish"
              className="relative z-10 aspect-square w-full rounded-full border-[14px] border-[#fff4df] object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickOrder;
