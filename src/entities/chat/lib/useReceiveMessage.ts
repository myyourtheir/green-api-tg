import { useEffect, useEffectEvent } from "react";
import { useAuthStore } from "@/entities/auth";
import { useDeleteNotificationMutation } from "../api/useDeleteNotificationMutation";
import { useReceiveNotificationQuery } from "../api/useReceiveNotificationQuery";
import { useChatsStore } from "../model/useChatsStore";

type useReceiveMessageParams = {
  onMessageAdded: () => void;
};
export const useReceiveMessage = ({
  onMessageAdded,
}: useReceiveMessageParams) => {
  const apiTokenInstance = useAuthStore((s) => s.apiTokenInstance);
  const idInstance = useAuthStore((s) => s.idInstance);
  const { data, refetch } = useReceiveNotificationQuery({
    idInstance,
    apiTokenInstance,
    seconds: 5,
  });
  const deleteNotification = useDeleteNotificationMutation();
  const cleanUp = useEffectEvent((receiptId: string) => {
    deleteNotification
      .mutateAsync({ receiptId, apiTokenInstance, idInstance })
      .then(() => refetch());
  });

  const addMessageAction = useEffectEvent(() => {
    queueMicrotask(onMessageAdded);
  });

  useEffect(() => {
    if (!data) return;
    const { receiptId, body } = data;
    if (body.typeWebhook !== "incomingMessageReceived") {
      cleanUp(receiptId);
      return;
    }
    const chatId = body.senderData.chatId;
    const storeData = useChatsStore.getState();

    useChatsStore.setState((draft) => {
      if (!storeData.chats[chatId]) {
        draft.chats[chatId] = [];
      }
      draft.chats[chatId].push({
        messageId: body.idMessage,
        text: body.messageData.textMessageData.textMessage,
        type: "incoming",
      });
      return draft;
    });
    addMessageAction();

    cleanUp(receiptId);
  }, [data]);
};
