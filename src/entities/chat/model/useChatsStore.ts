import { create } from "zustand";
import { INITIAL_CHATS_STORE_STATE } from "./initialChatsStoreState";
import type { ChatsStoreState } from "./types";
import { immer } from "zustand/middleware/immer";

export const useChatsStore = create<ChatsStoreState>()(
  immer(() => {
    return {
      ...INITIAL_CHATS_STORE_STATE,
    };
  }),
);
