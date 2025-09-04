const defaultMessages: Record<number, string> = {
  401: "Unauthorized",
  404: "Not Found",
  409: "Conflict",
  500: "Internal Server Error",
};
export const createErrorResponse = async (error: any) => {
  const status = error?.status;
  const cloneError = error.clone();
  console.log("status :>> ", status);
  let responseData;
  try {
    // Try parsing as JSON
    responseData = await error.json();
  } catch {
    // If it's not JSON, fallback to text
    responseData = await cloneError.text();
  }

  console.log("responseData :>> ", responseData);

  if (status === 404) {
    let finalMessage = "Not found";
    if (responseData.error || responseData.message) {
      finalMessage = responseData.error || responseData.message;
    } else if (
      responseData == "This url does not exist. Please publish again."
    ) {
      finalMessage = "Please check your project name or publish again.";
    } else if (responseData?.message) {
      finalMessage = responseData?.message;
    } else {
      finalMessage = responseData;
    }
    return {
      code: status,
      success: false,
      data: responseData,
      error: finalMessage,
      message: finalMessage,
    };
  }
  if (status === 401) {
    return {
      code: status,
      success: false,
      data: responseData?.message || "Unauthorized Access",
      error: "",
      message: "",
    };
  }
  if (status === 400) {
    return {
      code: status,
      success: false,
      data: responseData || "Please check your credentials",
      error: "",
      message: "",
    };
  }
  return {
    code: error?.code || 500,
    success: false,
    data: "",
    error: error?.message || "Please check your project name or publish again.",
    message: "",
  };
};

export const processFilterResponse = (response: any) => {
  console.log("response :>> ", response);
  const { code, message, result, count } = response;
  if (code === 200) {
    return {
      code,
      data: result,
      count,
      error: "",
      status: "success",
      message: "",
    };
  }
  return {
    code,
    data: [],
    count: 0,
    error: message,
    status: "failed",
    message,
  };
};
export const processCountFilterResponse = () => {};
export const processCreateItemResponse = (response: any) => {
  console.log("1", response);
  const { code, message, data, status, error } = response;
  if ([200, 201].includes(code)) {
    return {
      code,
      data,
      status,
      error,
      message,
    };
  }
};
export const processCreateErrorResponse = async (error: any) => {
  const status = error?.status;
  const cloneError = error.clone();
  console.log("status :>> ", status);
  let responseData;
  try {
    // Try parsing as JSON
    responseData = await error.json();
  } catch {
    // If it's not JSON, fallback to text
    responseData = await cloneError.text();
  }

  console.log("responseData :>> ", responseData);
  return responseData;
};
export const processListResponse = () => {};

export const processResponse = (result: any) => {
  console.log("1", result);
  if (result?.status === "FAILED") {
    const statusCode = result?.error?.errStatus || 400;
    const errorMessage =
      result?.error?.message || defaultMessages[statusCode] || "API Failed";
    console.log("errorMessage :>> ", errorMessage);

    return {
      code: statusCode,
      success: false,
      error: errorMessage,
      message: errorMessage,
      data: "",
    };
  }
  console.log("2", result?.code);
  if (![200, 201].includes(result?.code)) {
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
  console.log("3");
  console.log("After all check result :>> ", result);
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
