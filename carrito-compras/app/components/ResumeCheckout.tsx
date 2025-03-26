import { useCartStore } from "../stores/cartStore";
import { useHistoryStore } from "../stores/historyStore";
import { useRouter } from "next/navigation";
import { toast } from "@pheralb/toast";

export default function ResumeCheckout() {
  const products = useCartStore((state) => state.products);
  const subtotal = parseFloat(
    products
      ?.reduce((acc, product) => acc + product.price * product.quantity!, 0)
      .toFixed(2)
  );

  const router = useRouter();

  function handleCheckout() {
    if (products.length === 0) {
      toast.error({
        text: "Necesitas agregar aunque sea un producto🛒",
      });
      return;
    }
    useHistoryStore.getState().addHistory({
      products,
      total: subtotal,
      date: new Date().toLocaleString(),
    });

    router.push("/resume/sucess");

    useCartStore.getState().cleanCart();
  }

  return (
    <div className="w-[424px] flex flex-col bg-white rounded-lg p-6">
      <h2 className="text-[#191919] mb-2 text-xl font-medium leading-[30px]">
        Cart Total
      </h2>
      <div className="w-[376px] py-3 justify-between items-center flex">
        <span className="text-[#4c4c4c] text-base font-normal leading-normal">
          Total:
        </span>
        <span className="text-[#191919] text-base font-semibold leading-tight">
          {subtotal}
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
          {subtotal}
        </span>
      </div>

      <div className="mt-10">
        <button
          onClick={handleCheckout}
          className="w-[376px] mt-5 cursor-pointer text-white px-10 py-4 bg-[#00b206] rounded-[44px] gap-4 text-base font-semibold leading-tight"
        >
          Proceder al pago
        </button>
      </div>
    </div>
  );
}
