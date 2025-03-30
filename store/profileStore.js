import { create } from "zustand";

export const useProfileStore = create((set) => ({
  profile: {},
  setProfile: (newProfile) => {
    set(() => ({ profile: newProfile }));
  },
}));
