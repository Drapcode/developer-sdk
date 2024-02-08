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
      code: responseData.status,
      success: false,
      data: "Please Check Your Credentials",
      error: "",
      message: "",
    };
  }
  return {
    code: error.response.code,
    success: false,
    data: "",
    error: "Please check your project name or publish again.",
    message: "",
  };
};

const processResponse = (result: any) => {
  console.log("result", result);
  if (result.status === "FAILED") {
    if (result.error) {
      if (result.error.errStatus === 401) {
        return {
          code: result.error.errStatus,
          success: false,
          error: result.error.message,
          message: result.error.message,
          data: "",
        };
      }
    }
    return {
      code: 400,
      success: false,
      error: "API Failed",
      message: "",
      data: result,
    };
  } else {
    if (result.code === 404) {
      return {
        code: result.code,
        success: false,
        error: result.data,
        message: result.data,
        data: "",
      };
    }
    return { code: 200, success: true, error: "", message: "", data: result };
  }
};

export const getAllItems = async (
  baseurl: string,
  headers: Record<string, string>,
  collectionName: string
) => {
  try {
    const url = `${baseurl}/collection/${collectionName}/items`;
    console.log("url", url);
    const response = await fetch(url, { method: "GET", headers });
    const result = await response.json();
    return processResponse(result);
  } catch (error: any) {
    console.log("error", error);
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
    const response = await fetch(url, { method: "POST", headers, body: body });
    const result = await response.json();
    if (result.data && result.data.code === 404) {
      return {
        success: false,
        data: result.data.data,
        error: "",
        message: "",
      };
    }
    return { success: true, data: result.data, error: "", message: "" };
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
    return { success: true, data: result.data, error: "", message: "" };
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
    return { success: true, data: result.data, error: "", message: "" };
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
    const result = await response.json();
    return { success: true, data: result.data, error: "", message: "" };
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
    const response = await fetch(url,
      { method: 'PUT', headers, body: body }
    );
    const result = await response.json();
    return { success: true, data: result.data, error: "", message: "" };
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
      success: true,
      data: result.data?.message,
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
      body: body
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
      headers, body: body
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
      headers
    });
    const result = await response.json();
    return { success: true, data: result.data, error: "", message: "" };
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
