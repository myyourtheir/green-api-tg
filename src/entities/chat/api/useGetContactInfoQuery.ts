import { baseQuery } from "@/shared/lib/baseQuery";
import { createQueryHook } from "@/shared/lib/createQueryHook";
import type { SharedApiParams } from "@/shared/types";

type GetContactInfoQueryParams = {
  chatId: string | symbol;
} & SharedApiParams;

type GetContactInfoQueryResponse = {
  avatar: string;
  name: string;
  contactName: string;
  chatId: string;
  chatType: string;
  lastSeen: number;
  phoneNumber: number;
  username: string;
  isPremium: boolean;
  isVerified: boolean;
  isScam: boolean;
  description: string;
};
export const useGetContactInfoQuery = createQueryHook<
  GetContactInfoQueryParams,
  GetContactInfoQueryResponse
>(({ queryParams: { chatId, idInstance, apiTokenInstance } }) => {
  return {
    queryKey: ["CONTACT_INFO", chatId],
    queryFn: async () => {
      return baseQuery(
        `/waInstance${idInstance}/getContactInfo/${apiTokenInstance}`,
        { method: "POST", body: { chatId } },
      );
    },
  };
});
