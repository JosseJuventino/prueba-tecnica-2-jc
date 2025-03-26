"use client";
import { Product } from "../types/product";
import { useCartStore } from "../stores/cartStore";
import { toast } from "@pheralb/toast";

interface CardProps {
  product: Product;
}

export default function ProductCard({ product }: CardProps) {
  function handleAddToCart(product: Product) {
    product.quantity = 1;
    useCartStore.getState().addProduct(product);
    toast.success({
      text: "Product added to cart🚀✨",
    });
  }

  return (
    <article className="max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-700">
      <div>
        <img
          className="object-contain h-64 w-full"
          src={product.image}
          alt={product.title}
        />
      </div>

      <div className="flex flex-col gap-1 mt-4 px-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-50 line-clamp-1">
          {product.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
          {product.description}
        </p>
        <span className="font-semibold text-gray-800 dark:text-gray-50">
          $ {product.price}
        </span>
      </div>

      <div className="mt-4 p-4 border-t border-gray-200 dark:border-gray-500">
        <button
          onClick={() => handleAddToCart(product)}
          className="w-full flex justify-between items-center font-bold cursor-pointer hover:underline text-gray-800 dark:text-gray-50"
        >
          <span className="text-base">Add to Cart</span>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      </div>
    </article>
  );
}
