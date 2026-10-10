import { baseQuery } from "@/shared/lib/baseQuery";
import { createQueryHook } from "@/shared/lib/createQueryHook";
import type { SharedApiParams } from "@/shared/types";

type UseReceiveNotificationParams = {
  seconds?: number;
} & SharedApiParams;

type UseReceiveNotificationResponse = {
  receiptId: string;
  body: NotificationTextMessageBody;
};

type NotificationTextMessageBody = {
  typeWebhook: "incomingMessageReceived";
  instanceData: {
    idInstance: number;
    wid: string;
    typeInstance: string;
  };
  timestamp: number;
  idMessage: string;
  senderData: {
    chatId: string;
    chatType: string;
    sender: string;
    chatName: string;
    senderName: string;
    senderType: string;
    senderContactName: string;
    senderPhoneNumber: number;
  };
  messageData: {
    typeMessage: string;
    textMessageData: {
      textMessage: string;
      forwardingScore: number;
      isForwarded: false;
    };
  };
};

export const NOTIFICATION_QUERY_KEY = ["receiveNotification"];

export const useReceiveNotificationQuery = createQueryHook<
  UseReceiveNotificationParams,
  UseReceiveNotificationResponse
>(({ queryParams: { apiTokenInstance, idInstance, seconds = 5 } }) => {
  return {
    queryFn: () =>
      baseQuery(
        `/waInstance${idInstance}/receiveNotification/${apiTokenInstance}?receiveTimeout=${seconds}`,
      ),
    queryKey: NOTIFICATION_QUERY_KEY,
    refetchInterval: seconds * 1000,
  };
});
