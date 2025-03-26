"use client";
import Link from "next/link";
import { CheckCircle2, Plus } from "lucide-react";

export default function SuccessPage() {
  return (
    <main className="w-full h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-[600px] w-full p-8 md:p-4">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 text-center">
          <CheckCircle2 className="w-20 h-20 text-green-800 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-green-900 mb-4">
            Pago realizado exitosamente
          </h1>

          <p className="text-gray-600 mb-8">
            Tu pago ha sido realizado exitosamente, en breve recibirás un correo
            con los detalles de tu compra.
          </p>

          <div className="flex flex-col gap-4 max-w-xs mx-auto">
            <Link
              href="/"
              className="bg-green-800 text-white px-6 py-3 rounded-lg font-semibold hover:green-800 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Explorar más ofertas
            </Link>
            <Link
              href="/history"
              className="border-2 border-green-800 text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              Ver mi historial de compras
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
