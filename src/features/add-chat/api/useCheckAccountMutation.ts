import { baseQuery } from "@/shared/lib/baseQuery";
import { createMutationHook } from "@/shared/lib/createMutationHook";
import type { SharedApiParams } from "@/shared/types";

type CheckAccountParams = {
  phoneNumber: number;
} & SharedApiParams;

export type CheckAccountResponseExist = {
  exist: true;
  chatId: string;
  username: string;
  phoneNumber: number;
  fromCache: boolean;
};
export type CheckAccountResponseNotExist = {
  exist: false;
  chatId: string;
};

export type CheckAccountResponseInvalidSimple = {
  status: false;
  reason: string;
};

export type CheckAccountResponseInvalidDetailed = {
  status: false;
  data: {
    status: string;
    reason: string;
    retryAfter: number;
  };
};

export type CheckAccountResponse =
  | CheckAccountResponseExist
  | CheckAccountResponseNotExist
  | CheckAccountResponseInvalidSimple
  | CheckAccountResponseInvalidDetailed;

export const useCheckAccountMutation = createMutationHook<
  CheckAccountParams,
  CheckAccountResponse
>(() => {
  return {
    mutationFn: async ({ apiTokenInstance, idInstance, phoneNumber }) =>
      baseQuery(`/waInstance${idInstance}/checkAccount/${apiTokenInstance}`, {
        method: "POST",
        body: { phoneNumber },
      }),
  };
});
