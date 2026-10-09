type QueryParams = Record<string, string | number | null | object | boolean>;

export type SendRequestProps = {
  queryParams?: QueryParams;
  method?: string;
  body?: object;
  isAutoContentType?: boolean;
  isBlobOnResponse?: boolean;
  isAutoAccept?: boolean;
  customHeaders?: {
    Accept?: string;
  };
};

export class BaseQueryError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "BaseQueryError";
    this.status = status;
  }
}

export const prepareSearchParams = (
  queryParams: QueryParams,
): Record<string, string> => {
  return Object.entries(queryParams).reduce((initial, [key, value]) => {
    return {
      ...initial,
      [key]: typeof value === "string" ? value : JSON.stringify(value),
    };
  }, {});
};

export const baseQuery = async <T>(
  url: string,
  { queryParams, method = "GET", body }: SendRequestProps = {},
): Promise<T> => {
  const headers: Headers = new Headers();

  const requestUrl = new URL(
    `/api/${url.replace(/^\//, "")}`,
    window.location.origin,
  );
  requestUrl.search = new URLSearchParams(
    prepareSearchParams(queryParams ?? {}),
  ).toString();

  const response = await fetch(requestUrl, {
    headers,
    method,
    body: body instanceof FormData ? body : JSON.stringify(body),
  });

  if (!response) {
    throw new Error("Request execution error");
  }

  if (!response.ok) {
    let error = `${response.status} ${response.statusText}.`;
    try {
      const resText = await response.text();
      const errorData = JSON.parse(resText) as {
        error?: string;
        msg?: string;
      };
      error = errorData.error ?? errorData.msg ?? error;
    } catch (e) {
      throw new BaseQueryError("cannot parse response", 500);
    }

    throw new BaseQueryError(error, response.status);
  }

  if (response.status === 204) return undefined as T;

  return await response.json();
};
