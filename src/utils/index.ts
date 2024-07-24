const ErrorTypes = {
  INVALID_DATA: "Given data is not valid",
  MISSING_URL: "Provided URL is not valid",
};
export enum MethodTypes {
  POST = "post",
  GET = "get",
  PATCH = "patch",
  PUT = "put",
  DELETE = "delete",
}
export type APIData = {
  method: MethodTypes;
  url: string;
  headers: any;
  body: object;
};
export const makeAPICall = async (apiData: APIData) => {
  console.log("API call started");
  try {
    if (!apiData) {
      return { status: 402, error: {}, message: ErrorTypes.INVALID_DATA };
    }
    let { method, url, headers, body } = apiData;
    if (!url) {
      return { status: 402, error: {}, message: ErrorTypes.MISSING_URL };
    }

    if (!method) {
      method = MethodTypes.GET;
    }
    let response = null;
    const bodyMethods: string[] = [
      MethodTypes.POST,
      MethodTypes.PATCH,
      MethodTypes.PUT,
    ];
    const extra: any = { method };
    if (headers) {
      extra.headers = headers;
    }

    if (body) {
      extra.body = body;
    }

    response = await fetch(url, extra);
    if (!response?.ok) {
      return {
        status: response?.status,
        error: {},
        message: response.statusText,
      };
    }
    console.log("API call finished");
    return {
      status: response.status,
      error: null,
      headers: response.headers,
      data: await response.json(),
    };
  } catch (error: any) {
    console.log("error", error);
    return { status: 402, error: error, message: error.message };
  }
};
