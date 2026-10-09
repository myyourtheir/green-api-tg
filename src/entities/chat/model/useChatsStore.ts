import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { INITIAL_CHATS_STORE_STATE } from "./initialChatsStoreState";
import type { ChatsStoreState } from "./types";

export const useChatsStore = create<ChatsStoreState>()(
  immer(() => {
    return {
      ...INITIAL_CHATS_STORE_STATE,
    };
  }),
);
