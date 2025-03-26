import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl">Carrito de compras</h1>
      <div>
        <Link href={"/resume"}>Ver Carrito</Link>
      </div>
    </header>
  );
}
