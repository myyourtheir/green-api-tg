import { create } from "zustand";
import { INITIAL_CHATS_STORE_STATE } from "./initialChatsStoreState";
import type { ChatsStoreState } from "./types";

export const useChatsStore = create<ChatsStoreState>()(() => {
  return {
    ...INITIAL_CHATS_STORE_STATE,
  };
});
