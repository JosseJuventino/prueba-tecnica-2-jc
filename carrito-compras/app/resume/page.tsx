"use client";

import TableProductsCart from "../components/TableProductsCart";
import ResumeCheckout from "../components/ResumeCheckout";

export default function Resume() {
  return (
    <section className="w-full bg-white dark:bg-[#0A2025] py-9 px-8">
      <h1 className="text-center text-[#191919] dark:text-white text-[32px] font-semibold leading-[38px]">
        Resumen
      </h1>
      <div className="flex items-start mt-8 gap-6">
        <div className="bg-white p-4 w-[800px] rounded-xl">
          <TableProductsCart />
        </div>
        <ResumeCheckout />
      </div>
    </section>
  );
}
