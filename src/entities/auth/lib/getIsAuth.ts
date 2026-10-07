import { useAuthStore } from "../model/useAuthStore";

export const getIsAuth = () => {
  const { apiTokenInstance, idInstance } = useAuthStore.getState();
  if (!apiTokenInstance || !idInstance) {
    return Promise.reject();
  }
  return Promise.resolve();
};
