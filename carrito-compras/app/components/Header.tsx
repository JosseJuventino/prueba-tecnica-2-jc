import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl">Carrito de compras</h1>
      <div className="flex flex-row gap-4">
        <Link href={"/"}>
          <span className="mr-4">Inicio</span>
        </Link>
        <Link href={"/history"}>
          <span className="mr-4">Historial</span>
        </Link>
        <Link href={"/resume"}>
          <ShoppingCart />
        </Link>
      </div>
    </header>
  );
}
