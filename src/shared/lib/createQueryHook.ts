import {
  QueryClient,
  useQuery,
  useQueryClient,
  type UseQueryOptions,
} from "@tanstack/react-query";

type PredefinedParamsFn<
  QueryParams,
  TQueryFnData = unknown,
  TError = Error,
  TData = TQueryFnData,
  TQueryKey extends readonly unknown[] = readonly unknown[],
> = (params: {
  queryClient: QueryClient;
  queryParams: QueryParams;
}) => UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>;

export const createQueryHook = <
  QueryParams,
  TQueryFnData = unknown,
  TError = Error,
  TData = TQueryFnData,
  TQueryKey extends readonly unknown[] = readonly unknown[],
>(
  predefinedParamsFn: PredefinedParamsFn<
    QueryParams,
    TQueryFnData,
    TError,
    TData,
    TQueryKey
  >,
) => {
  return (
    params?: QueryParams,
    options?: UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
  ) => {
    const queryClient = useQueryClient();
    const predefinedParams = predefinedParamsFn({
      queryClient,
      queryParams: params ?? ({} as QueryParams),
    });

    return useQuery({
      ...predefinedParams,
      ...options,
    });
  };
};

export const createLazyQueryHook = <
  QueryParams,
  TQueryFnData = unknown,
  TError = Error,
  TData = TQueryFnData,
  TQueryKey extends readonly unknown[] = readonly unknown[],
>(
  predefinedParamsFn: PredefinedParamsFn<
    QueryParams,
    TQueryFnData,
    TError,
    TData,
    TQueryKey
  >,
) => {
  return (
    options?: UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
  ) => {
    const queryClient = useQueryClient();

    return (params?: QueryParams) => {
      const predefinedParams = predefinedParamsFn({
        queryClient,
        queryParams: params ?? ({} as QueryParams),
      });
      return queryClient.query({
        ...predefinedParams,
        ...options,
      });
    };
  };
};
