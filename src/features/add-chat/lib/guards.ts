import type {
  CheckAccountResponse,
  CheckAccountResponseExist,
  CheckAccountResponseInvalidDetailed,
  CheckAccountResponseInvalidSimple,
  CheckAccountResponseNotExist,
} from "../api/useCheckAccountMutation";

export const isCheckAccountResponseExist = (
  data: CheckAccountResponse,
): data is CheckAccountResponseExist => {
  return "exist" in data && data.exist === true;
};
export const isCheckAccountResponseNotExist = (
  data: CheckAccountResponse,
): data is CheckAccountResponseNotExist => {
  return "exist" in data && data.exist === false;
};

export const isCheckAccountResponseInvalidSimple = (
  data: CheckAccountResponse,
): data is CheckAccountResponseInvalidSimple => {
  return "status" in data && data.status === false && "reason" in data;
};

export const isCheckAccountResponseInvalidDetailed = (
  data: CheckAccountResponse,
): data is CheckAccountResponseInvalidDetailed => {
  return (
    "status" in data &&
    data.status === false &&
    "data" in data &&
    "reason" in data.data
  );
};
