import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import type { User } from "@/types/auth";
import type { AuthStore } from "@/types/store";

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      isAuthenticated: false,
      user: undefined,
      token: undefined,

      SET_USER: (user: User | undefined) => set({ user }),
      UNSET_USER: () => set({ user: undefined }),
      SET_TOKEN: (token: string | undefined) => set({ token }),
      UNSET_TOKEN: () => set({ token: undefined }),
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
