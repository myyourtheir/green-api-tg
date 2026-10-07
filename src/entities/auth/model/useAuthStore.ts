import { create } from "zustand";
import { INITIAL_AUTH_STORE_STATE } from "./initialAuthStoreState";
import type { AuthStoreState } from "./types";

export const useAuthStore = create<AuthStoreState>()(() => {
  return {
    ...INITIAL_AUTH_STORE_STATE,
  };
});
