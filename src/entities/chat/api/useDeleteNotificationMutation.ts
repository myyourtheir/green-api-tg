import { baseQuery } from "@/shared/lib/baseQuery";
import { createMutationHook } from "@/shared/lib/createMutationHook";
import type { SharedApiParams } from "@/shared/types";

type UseDeleteNotificationParams = {
  receiptId: string;
} & SharedApiParams;

export const useDeleteNotificationMutation =
  createMutationHook<UseDeleteNotificationParams>(() => {
    return {
      mutationFn: ({ apiTokenInstance, idInstance, receiptId }) =>
        baseQuery(
          `/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${receiptId}`,
          { method: "DELETE", body: { receiptId } },
        ),
    };
  });
