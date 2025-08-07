export const createErrorResponse = async (error: any) => {
  const status = error?.status;
  console.log("status :>> ", status);

  const responseData = await error.json();
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
      data: "Please check your credentials",
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

export const processResponse = (result: any) => {
  const defaultMessages: Record<number, string> = {
    401: "Unauthorized",
    404: "Not Found",
    409: "Conflict",
    500: "Internal Server Error",
  };
  console.log("1");
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
  console.log("2");
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
