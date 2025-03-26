import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ProductHistory } from "../types/history";

type HistoryState = {
  history: ProductHistory[];
  addHistory: (history: ProductHistory) => void;
  cleanHistory: () => void;
};

export const useHistoryStore = create<HistoryState>()(
  persist(
    (set) => ({
      history: [],
      addHistory: (history: ProductHistory) => {
        set((state) => ({ history: [...state.history, history] }));
      },
      cleanHistory: () => {
        set({ history: [] });
      },
    }),

    {
      name: "history-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
