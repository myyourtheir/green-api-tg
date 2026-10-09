import { skipToken } from "@tanstack/react-query";
import { useAuthStore } from "@/entities/auth/@x/chat";
import { useGetContactInfoQuery } from "../api/useGetContactInfoQuery";

type UseGetContactInfoParams = {
  chatId: string | undefined;
};
export const useGetContactInfo = ({ chatId }: UseGetContactInfoParams) => {
  const apiTokenInstance = useAuthStore((s) => s.apiTokenInstance);
  const idInstance = useAuthStore((s) => s.idInstance);

  return useGetContactInfoQuery({
    chatId: chatId ?? skipToken,
    apiTokenInstance,
    idInstance,
  });
};
