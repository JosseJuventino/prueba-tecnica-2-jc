import { useState } from "react";
import { Product } from "../types/product";
import { HistoryPopup } from "./Popups/HistoryPopup";

interface HistoryElementProps {
  products: Product[];
  total: number;
  date: string;
}

export default function HistoryElement({
  products,
  total,
  date,
}: HistoryElementProps) {
  const [modalState, setModalState] = useState<{
    type: "add" | null;
    selected: Product[] | null;
  }>({ type: null, selected: null });

  const closeModal = () => {
    setModalState({ type: null, selected: null });
  };

  return (
    <div
      onClick={() => setModalState({ type: "add", selected: null })}
      className="flex cursor-pointer flex-row rounded-lg bg-white shadow-2xl px-5 py-2 items-center justify-between my-5"
    >
      <div className="my-5">
        <p>Compra realizada el {date}</p>
      </div>

      <HistoryPopup
        isOpen={modalState.type === "add"}
        onClose={closeModal}
        title="Productos"
        total={total}
        productos={products}
      />
    </div>
  );
}
