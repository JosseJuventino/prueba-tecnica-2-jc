import { useCartStore } from "../stores/cartStore";

export default function ResumeCheckout() {
  const products = useCartStore((state) => state.products);

  return (
    <div className="w-[424px] bg-white rounded-lg p-6">
      <h2 className="text-[#191919] mb-2 text-xl font-medium leading-[30px]">
        Cart Total
      </h2>
      <div className="w-[376px] py-3 justify-between items-center flex">
        <span className="text-[#4c4c4c] text-base font-normal leading-normal">
          Total:
        </span>
        <span className="text-[#191919] text-base font-semibold leading-tight">
          ${" "}
          {products
            ?.reduce(
              (acc, product) => acc + product.price * product.quantity!,
              0
            )
            .toFixed(2)}
        </span>
      </div>
      <div className="w-[376px] py-3 shadow-[0px_1px_0px_0px_rgba(229,229,229,1.00)] justify-between items-center flex">
        <span className="text-[#4c4c4c] text-sm font-normal leading-[21px]">
          Shipping:
        </span>
        <span className="text-[#191919] text-sm font-medium leading-[21px]">
          Free
        </span>
      </div>
      <div className="w-[376px] py-3 shadow-[0px_1px_0px_0px_rgba(229,229,229,1.00)] justify-between items-center flex">
        <span className="text-[#4c4c4c] text-sm font-normal leading-[21px]">
          Subtotal:
        </span>
        <span className="text-[#191919] text-sm font-medium leading-[21px]">
          ${" "}
          {products
            ?.reduce(
              (acc, product) => acc + product.price * product.quantity!,
              0
            )
            .toFixed(2)}
        </span>
      </div>
      <button className="w-[376px] cursor-pointer text-white mt-5 px-10 py-4 bg-[#00b206] rounded-[44px] gap-4 text-base font-semibold leading-tight">
        Proceder al pago
      </button>
    </div>
  );
}
