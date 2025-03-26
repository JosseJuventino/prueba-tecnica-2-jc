"use client";
import { Product } from "@/app/types/product";
import { Modal } from "./Modal";

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  total: number;
  productos: Product[];
}

export const HistoryPopup = ({
  isOpen,
  onClose,
  title,
  total,
  productos,
}: FormModalProps) => {
  const handleCancel = () => {
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      title={title}
      onClose={handleCancel}
      buttons={
        <div className="flex gap-2">
          <button
            onClick={handleCancel}
            className="px-4 py-2 text-green-700 rounded"
          >
            Aceptar
          </button>
        </div>
      }
    >
      <main className="space-y-4 px-6">
        {productos.map((product: Product) => (
          <div key={product.id} className="flex justify-between">
            {product.title.length > 20 ? (
              <p>{product.title.slice(0, 20)}...</p>
            ) : (
              <p>{product.title}</p>
            )}
            <p>{product.price}</p>
            <p>{product.quantity}</p>
          </div>
        ))}

        <div className="flex justify-between">
          <p>Total</p>
          <p>{total}</p>
        </div>
      </main>
    </Modal>
  );
};
