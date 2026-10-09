import { useCallback } from "react";
import { useAuthStore } from "@/entities/auth";
import { useCheckAccountMutation } from "../api/useCheckAccountMutation";
import {
  isCheckAccountResponseExist,
  isCheckAccountResponseInvalidDetailed,
  isCheckAccountResponseInvalidSimple,
  isCheckAccountResponseNotExist,
} from "./guards";

type CheckAccountResponse = { chatId: string; error: string | null };

export const useCheckAccount = () => {
  const { mutateAsync, isPending } = useCheckAccountMutation();
  const apiTokenInstance = useAuthStore((s) => s.apiTokenInstance);
  const idInstance = useAuthStore((s) => s.idInstance);

  const checkAccount = useCallback(
    async (phoneNumber: number): Promise<CheckAccountResponse> => {
      try {
        const resp = await mutateAsync({
          apiTokenInstance,
          idInstance,
          phoneNumber,
        });
        if (isCheckAccountResponseExist(resp)) {
          return { chatId: resp.chatId, error: null };
        }
        if (isCheckAccountResponseInvalidDetailed(resp)) {
          return { chatId: "", error: resp.data.reason };
        }
        if (isCheckAccountResponseInvalidSimple(resp)) {
          return { chatId: "", error: resp.reason };
        }
        if (isCheckAccountResponseNotExist(resp)) {
          return { chatId: "", error: "Account not exists" };
        }
        return { chatId: "", error: "Error occurred" };
      } catch (e) {
        return { chatId: "", error: "Error occurred" };
      }
    },
    [mutateAsync, apiTokenInstance, idInstance],
  );

  return { checkAccount, isPending };
};
