import { create } from "zustand";

export const useAppStore = create((set) => {
  return {
    fillter: "",
    thmems: ["yellow", "yellow-dark"],
    setFilter(value) {
      return set(() => {
          return { fillter: value }
      });
    },
  };
});
