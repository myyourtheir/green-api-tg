import { baseQuery } from "@/shared/lib/baseQuery";
import { createMutationHook } from "@/shared/lib/createMutationHook";
import type { SharedApiParams } from "@/shared/types";

type SendMessageParams = {
  chatId: string;
  message: string;
} & SharedApiParams;

type SendMessageResponse = {
  messageId: string;
};

export const useSendMessageMutation = createMutationHook<
  SendMessageParams,
  SendMessageResponse
>(() => {
  return {
    mutationFn: ({ apiTokenInstance, chatId, idInstance, message }) =>
      baseQuery(`/waInstance${idInstance}/sendMessage/${apiTokenInstance}`, {
        method: "POST",
        body: { chatId, message },
      }),
  };
});
