import { create } from "zustand";

export const useFireStore = create((set) => ({
  active: false,
  verse: null,

  triggerFire: (verse: any) =>
    set({
      active: true,
      verse
    }),

  reset: () =>
    set({
      active: false,
      verse: null
    })
}));
