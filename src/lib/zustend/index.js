import { create } from "zustand";

export const useAppStore = create((set) => {
  return {
    fillter: "",
    setFilter(value) {
      return set(() => {
          return { fillter: value }
      });
    },
  };
});
