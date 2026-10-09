import type { AuthStoreState } from "./types";

export const INITIAL_AUTH_STORE_STATE: AuthStoreState = {
  idInstance: import.meta.env.VITE_ID_INSTANCE ?? "",
  apiTokenInstance: import.meta.env.VITE_API_TOKEN_INSTANCE ?? "",
};
