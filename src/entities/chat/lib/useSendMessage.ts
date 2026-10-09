import { useAuthStore } from "@/entities/auth/@x/chat";
import { useSendMessageMutation } from "../api/useSendMessageMutation";

type SendMessageParams = {
  chatId: string;
  message: string;
};

export const useSendMessage = () => {
  const apiTokenInstance = useAuthStore((s) => s.apiTokenInstance);
  const idInstance = useAuthStore((s) => s.idInstance);

  const { isPending, mutateAsync } = useSendMessageMutation();

  const sendMessage = ({ chatId, message }: SendMessageParams) => {
    return mutateAsync({ apiTokenInstance, chatId, idInstance, message });
  };

  return { sendMessage, isPending };
};
