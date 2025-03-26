"use client";
import HistoryElement from "../components/HistoryElement";
import { useHistoryStore } from "../stores/historyStore";

export default function HistoryPage() {
  const history = useHistoryStore((state) => state.history);
  function handleCleanHistory() {
    useHistoryStore.getState().cleanHistory();
  }

  return (
    <main className=" bg-white w-[80%] mx-[10%]  dark:bg-[#0A2025] py-9 px-8">
      <h1 className="text-center text-[#191919] dark:text-white text-[32px] font-semibold leading-[38px]">
        Resumen
      </h1>

      <section className="grid grid-cols-2 gap-5">
        {history.map((product, index) => (
          <HistoryElement
            key={index}
            products={product.products}
            total={product.total}
            date={product.date}
          />
        ))}
      </section>
      <button
        className="cursor-pointer px-5 py-2 bg-green-700 text-white rounded-sm"
        onClick={handleCleanHistory}
      >
        Limpiar Historial
      </button>
    </main>
  );
}
