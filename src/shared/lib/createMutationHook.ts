import {
  QueryClient,
  useMutation,
  type UseMutationOptions,
  useQueryClient,
} from "@tanstack/react-query";

type MutationParams<
  TData = unknown,
  TError = Error,
  TVariables = void,
  TOnMutateResult = unknown,
> = Omit<
  UseMutationOptions<TData, TError, TVariables, TOnMutateResult>,
  "mutationFn"
>;

export const createMutationHook = <
  TVariables = void,
  TData = unknown,
  TError = Error,
  TOnMutateResult = unknown,
>(
  predefinedParamsFn: (
    queryClient: QueryClient,
  ) => UseMutationOptions<TData, TError, TVariables, TOnMutateResult>,
) => {
  return (
    params?: MutationParams<TData, TError, TVariables, TOnMutateResult>,
  ) => {
    const queryClient = useQueryClient();
    const predefinedParams = predefinedParamsFn(queryClient);

    return useMutation({
      ...predefinedParams,
      ...params,
      onSuccess: (...args) => {
        predefinedParams.onSuccess?.(...args);
        params?.onSuccess?.(...args);
      },
      onError: (...args) => {
        predefinedParams.onError?.(...args);
        params?.onError?.(...args);
      },
      onSettled: (...args) => {
        predefinedParams.onSettled?.(...args);
        params?.onSettled?.(...args);
      },
    });
  };
};
