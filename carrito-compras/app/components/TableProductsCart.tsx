import { CircleX, Plus, Minus } from "lucide-react";
import Link from "next/link";
import { useCartStore } from "../stores/cartStore";
import { Product } from "../types/product";
import { toast } from "@pheralb/toast";

export default function TableProductsCart() {
  const products = useCartStore((state) => state.products);

  function handleRemove(product: Product) {
    product.quantity = 1;
    useCartStore.getState().removeProduct(product.id);
    toast.success({
      text: "Product removed to cart🚀✨",
    });
  }

  function handleAddQuantity(product: Product) {
    useCartStore.getState().addQuantityToProduct(product.id);
  }

  function handleRemoveQuantity(product: Product) {
    if (product.quantity === 1) {
      useCartStore.getState().removeProduct(product.id);
    } else {
      useCartStore.getState().removeQuantityToProduct(product.id);
    }
  }

  return (
    <table className="w-full bg-white rounded-xl">
      <thead>
        <tr className="text-center border-b border-gray-400 w-full text-[#7f7f7f] text-sm font-medium uppercase leading-[14px] tracking-wide">
          <th className="text-left px-2 py-2">Producto</th>
          <th className="px-2 py-2">Precio</th>
          <th className="px-2 py-2">Cantidad</th>
          <th className="px-2 py-2">Subtotal</th>
          <th className="w-7 px-2 py-2"></th>
        </tr>
      </thead>
      <tbody>
        {products?.map((product: Product) => (
          <tr className="text-center" key={product.id}>
            <td className="px-2 py-2 text-left align-top overflow-ellipsis flex-nowrap">
              <img
                src={product.image}
                alt={product.title}
                className="w-[100px] object-contain mr-2 inline-block h-[100px]"
              />
              <span className="text-sm ">{product.title}</span>
            </td>
            <td className="px-2 py-2">$ {product.price}</td>
            <td className="p-2 mt-9 bg-white rounded-[170px] border border-[#a0a0a0] justify-around items-center flex">
              <button
                onClick={() => handleAddQuantity(product)}
                className="cursor-pointer"
              >
                <Plus size={20} />
              </button>
              <span className="w-10 text-center text-[#191919] text-base font-normal leading-normal">
                {product.quantity}
              </span>
              <button
                onClick={() => handleRemoveQuantity(product)}
                className="cursor-pointer"
              >
                <Minus size={20} />
              </button>
            </td>
            <td className="px-2 py-2">
              ${" "}
              {product.quantity &&
                (product.price * product.quantity).toFixed(2)}
            </td>
            <td className="px-2 py-2">
              <button onClick={() => handleRemove(product)}>
                <CircleX size={20} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr className="border-t border-gray-400">
          <td className="px-2 py-5">
            <Link
              href={"/"}
              className="px-8 cursor-pointer py-3.5 bg-[#f2f2f2] rounded-[43px] text-[#4c4c4c] text-sm font-semibold classNameName leading-[16px]"
            >
              Return to shop
            </Link>
          </td>
        </tr>
      </tfoot>
    </table>
  );
}
