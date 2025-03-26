"use client";

import { ReactNode, useEffect } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
  buttons?: ReactNode;
}

export const Modal = ({
  isOpen,
  title,
  children,
  onClose,
  buttons,
}: ModalProps) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black opacity-50 z-40"
        onClick={onClose}
      ></div>

      <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg w-full max-w-md shadow-lg transform transition-all duration-300 ease-in-out">
          <div className="flex justify-between items-center p-6">
            <h3 className="text-2xl text-green-700 font-semibold">{title}</h3>
            <button
              onClick={() => onClose}
              className="text-gray-500 cursor-pointer hover:text-gray-700 transition-colors duration-200"
              aria-label="Cerrar modal"
            >
              <X size={24} className=" z-50" />
            </button>
          </div>

          <div>{children}</div>

          {buttons && (
            <div className="p-6 border-gray-200 flex justify-end gap-4">
              {buttons}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
