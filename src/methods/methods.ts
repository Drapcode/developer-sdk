import { Query, QueryOperation, SearchPaginate } from "../utils/constants";

const createErrorResponse = (error: any) => {
  if (error.response && error.response.status === 404) {
    const responseData = error.response.data;
    let finalData;
    if (responseData == "This url does not exist. Please publish again.") {
      finalData = "Please check your project name or publish again.";
    } else if (responseData.message) {
      finalData = responseData.message;
    } else {
      finalData = responseData !== "" ? responseData : "Not found";
    }
    return {
      code: error.response.status,
      success: false,
      data: finalData,
      error: "",
      message: "",
    };
  } else if (error.response && error.response.status === 401) {
    const responseData = error.response;
    return {
      code: responseData.status,
      success: false,
      data: responseData.data.message,
      error: "",
      message: "",
    };
  } else if (error.response && error.response.status === 400) {
    const responseData = error.response;
    return {
      code: responseData?.status,
      success: false,
      data: "Please Check Your Credentials",
      error: "",
      message: "",
    };
  }
  return {
    code: error?.response?.code,
    success: false,
    data: "",
    error: "Please check your project name or publish again.",
    message: "",
  };
};

const processResponse = (result: any) => {
  const defaultMessages: Record<number, string> = {
    401: "Unauthorized",
    404: "Not Found",
    409: "Conflict",
    500: "Internal Server Error",
  };

  if (result?.status === "FAILED") {
    const statusCode = result?.error?.errStatus || 400;
    const errorMessage =
      result?.error?.message || defaultMessages[statusCode] || "API Failed";

    return {
      code: statusCode,
      success: false,
      error: errorMessage,
      message: errorMessage,
      data: "",
    };
  }

  if (result?.code && result?.code !== 200) {
    const errorMessage =
      result?.data || defaultMessages[result?.code] || "An error occurred";

    return {
      code: result.code,
      success: false,
      error: errorMessage,
      message: errorMessage,
      data: "",
    };
  }

  return {
    code: 200,
    success: true,
    error: "",
    message: "",
    data: result?.result || result,
    totalItems: result?.totalItems || 0,
    totalPages: result?.totalPages || 0,
  };
};

export const getAllItems = async (
  baseurl: string,
  headers: Record<string, string>,
  collectionName: string,
  reqQuery: SearchPaginate,
  query: Query[]
) => {
  try {
    const queryParams = new URLSearchParams();
    console.log("headers :>> ", headers);
    console.log("query :>> ", query);
    console.log("reqQuery :>> ", reqQuery);

    if (reqQuery?.sortField)
      queryParams.append("sortField", reqQuery.sortField);
    if (reqQuery?.sortOrder)
      queryParams.append("sortOrder", reqQuery.sortOrder);
    if (reqQuery?.searchTerm)
      queryParams.append("searchTerm", reqQuery.searchTerm);
    if (reqQuery?.isPagination) {
      queryParams.append("page", reqQuery.page);
      queryParams.append("limit", reqQuery.limit);
    }
    query.map((query) => {
      const conditionString = QueryOperation[query.condition];
      const field = encodeURIComponent(query.field);
      const value = encodeURIComponent(query.value);
      queryParams.append(`${field}:${conditionString}`, `${value}`);
    });
    const url = `${baseurl}/collection/${collectionName}/items?${queryParams.toString()}`;
    console.log("Generated URL:", url);

    const response = await fetch(url, { method: "GET", headers });
    const result = await response.json();
    return processResponse(result);
  } catch (error: any) {
    console.log("error :>> ", error);
    return createErrorResponse(error);
  }
};

export const createItem = async (
  baseurl: string,
  headers: Record<string, string>,
  collectionName: string,
  body: any
) => {
  try {
    const url = `${baseurl}/collection/${collectionName}/items`;
    console.log("url :>> ", url);
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });
    console.log("response.status :>> ", response.status);
    if (response.status && response.status === 404) {
      return {
        success: false,
        data: "Collection Not Found",
        error: "",
        message: "",
      };
    }
    const result = await response.json();
    console.log("result :>> ", result);
    return {
      code: result?.code,
      success: true,
      data: result?.data,
      error: "",
      message: result.message || "",
    };
  } catch (error: any) {
    return createErrorResponse(error);
  }
};

export const getItemsWithFilter = async (
  baseurl: string,
  headers: Record<string, string>,
  collectionName: string,
  filterUuid: string
) => {
  try {
    const url = `${baseurl}/collection/${collectionName}/filter/${filterUuid}/items`;
    const response = await fetch(url, { method: "GET", headers });
    const result = await response.json();
    return processResponse(result);
  } catch (error: any) {
    return createErrorResponse(error);
  }
};

export const getItemsCountWithFilter = async (
  baseurl: string,
  headers: Record<string, string>,
  collectionName: string,
  filterUuid: string
) => {
  try {
    const url = `${baseurl}/collection/${collectionName}/filter/${filterUuid}/count`;
    const response = await fetch(url, { method: "GET", headers });
    const result = await response.json();
    return processResponse(result);
  } catch (error: any) {
    return createErrorResponse(error);
  }
};

export const getItemWithUuid = async (
  baseurl: string,
  headers: Record<string, string>,
  collectionName: string,
  itemUuid: string
) => {
  try {
    const url = `${baseurl}/collection/${collectionName}/item/${itemUuid}`;
    const response = await fetch(url, { method: "GET", headers });
    if (response.status && response.status === 404) {
      return {
        code: response.status,
        success: false,
        data: "Please Check ItemUuid OR Collection Name",
        error: "",
        message: "",
      };
    } else {
      const result = await response.json();
      return processResponse(result);
    }
  } catch (error: any) {
    return createErrorResponse(error);
  }
};

export const updateItemWithUuid = async (
  baseurl: string,
  headers: Record<string, string>,
  collectionName: string,
  itemUuid: string,
  body: any
) => {
  try {
    const url = `${baseurl}/collection/${collectionName}/item/${itemUuid}`;
    const response = await fetch(url, {
      method: "PUT",
      headers,
      body: JSON.stringify(body),
    });
    if (response.status && response.status === 404) {
      return {
        code: response.status,
        success: false,
        data: "Please Check ItemUuid OR Collection Name",
        error: "",
        message: "",
      };
    } else {
      const result = await response.json();
      return processResponse(result);
    }
  } catch (error: any) {
    return createErrorResponse(error);
  }
};

export const deleteItemWithUuid = async (
  baseurl: string,
  headers: Record<string, string>,
  collectionName: string,
  itemUuid: string
) => {
  try {
    const url = `${baseurl}/collection/${collectionName}/item/${itemUuid}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers,
    });
    const result = await response.json();
    return {
      code: result?.code,
      success: result?.code == 200 ? true : false,
      data: result.message,
      error: "",
      message: "",
    };
  } catch (error: any) {
    return createErrorResponse(error);
  }
};

export const bulkDeleteItems = async (
  baseurl: string,
  headers: Record<string, string>,
  collectionName: string,
  body: any
) => {
  try {
    const url = `${baseurl}/collection/${collectionName}/bulkDelete`;
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: body,
    });
    const result = await response.json();
    return { success: true, data: result.data, error: "", message: "" };
  } catch (error: any) {
    return createErrorResponse(error);
  }
};

export const getItemsByids = async (
  baseurl: string,
  headers: Record<string, string>,
  collectionName: string,
  body: any
) => {
  try {
    const url = `${baseurl}/collection/${collectionName}/itemsbyids`;
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: body,
    });
    const result = await response.json();
    return { success: true, data: result.data, error: "", message: "" };
  } catch (error: any) {
    return createErrorResponse(error);
  }
};
export const sendEmail = async (
  baseurl: string,
  headers: Record<string, string>,
  templateId: string,
  sendTo: any
) => {
  try {
    const url = `${baseurl}/sendEmail/${templateId}/user/${sendTo}`;
    const response = await fetch(url, {
      method: "POST",
      headers,
    });
    const result = await response.json();
    return { success: true, data: result, error: "", message: "" };
  } catch (error: any) {
    return createErrorResponse(error);
  }
};

/**
 * {
 * code,
 * success
 * data,
 * error,
 * message,
 * }
 */
