import { Query, QueryOperation, SearchPaginate } from "../utils/constants";
import { createErrorResponse, processResponse } from "../utils/util";

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
    if (Array.isArray(query)) {
      query.forEach((query) => {
        const conditionString = QueryOperation[query.condition];
        const field = `${query.field}`;
        const value = `${query.value}`;
        // double encoding the query params(remove after testing)
        // const field = encodeURIComponent(query.field);
        // const value = encodeURIComponent(query.value);
        queryParams.append(`${field}:${conditionString}`, `${value}`);
      });
    }
    const url = `${baseurl}/collection/${collectionName}/items?${queryParams.toString()}`;
    console.log("Generated URL:", url);
    const response = await fetch(url, { method: "GET", headers });
    if (!response.ok) {
      return await createErrorResponse(response);
    }

    const result = await response.json();
    return processResponse(result);
  } catch (error: any) {
    let message = error.message;
    if (message) {
      message = message.replace("fetch failed", "Network Error");
    }
    return { code: 500, error: message, message: message };
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
    if (!response.ok) {
      return await createErrorResponse(response);
    }

    console.log("response.status :>> ", response.status);

    if (
      response?.status &&
      (response?.status === 200 || response?.status === 201)
    ) {
      const result = await response.json();
      return {
        code: response?.status,
        success: true,
        data: result,
        error: "",
        message: "",
      };
    }
  } catch (error: any) {
    let message = error.message;
    if (message) {
      message = message.replace("fetch failed", "Network Error");
    }
    return { code: 500, error: message, message: message };
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
    let message = error.message;
    if (message) {
      message = message.replace("fetch failed", "Network Error");
    }
    return { code: 500, error: message, message: message };
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
    let message = error.message;
    if (message) {
      message = message.replace("fetch failed", "Network Error");
    }
    return { code: 500, error: message, message: message };
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
    console.log("Generated url:getItemWithUuid :>> ", url);
    const response = await fetch(url, { method: "GET", headers });
    if (!response.ok) {
      return await createErrorResponse(response);
    }
    const result = await response.json();
    return result;
  } catch (error: any) {
    let message = error.message;
    if (message) {
      message = message.replace("fetch failed", "Network Error");
    }
    return { code: 500, error: message, message: message };
  }
};

export const getItemOnly = async (
  baseurl: string,
  headers: Record<string, string>,
  collectionName: string,
  itemUuid: string
) => {
  try {
    const url = `${baseurl}/collection/${collectionName}/item-only/${itemUuid}`;
    console.log("Generated url:getItemWithUuid :>> ", url);
    const response = await fetch(url, { method: "GET", headers });
    if (!response.ok) {
      return await createErrorResponse(response);
    }
    const result = await response.json();
    return result;
  } catch (error: any) {
    let message = error.message;
    if (message) {
      message = message.replace("fetch failed", "Network Error");
    }
    return { code: 500, error: message, message: message };
  }
};

export const countItemByValue = async (
  baseurl: string,
  headers: Record<string, string>,
  collectionName: string,
  fieldName: string,
  fieldValue: any
) => {
  try {
    const url = `${baseurl}/collection/${collectionName}/count-by-field`;
    console.log("url :>> ", url);
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify({ fieldName, fieldValue }),
    });
    if (!response.ok) {
      return await createErrorResponse(response);
    }
    const result = await response.json();
    return result;
  } catch (error: any) {
    let message = error.message;
    if (message) {
      message = message.replace("fetch failed", "Network Error");
    }
    return { code: 500, error: message, message: message };
  }
};
export const saveCSVData = async (
  baseurl: string,
  headers: Record<string, string>,
  collectionName: string,
  items: any[]
) => {
  try {
    const url = `${baseurl}/collection/${collectionName}/csv-items`;
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify({ items }),
    });
    if (!response.ok) {
      return await createErrorResponse(response);
    }
    const result = await response.json();
    return result;
  } catch (error: any) {
    let message = error.message;
    if (message) {
      message = message.replace("fetch failed", "Network Error");
    }
    return { code: 500, error: message, message: message };
  }
};
export const validateItem = async (
  baseurl: string,
  headers: Record<string, string>,
  collectionName: string,
  item: any
) => {
  try {
    const url = `${baseurl}/collection/${collectionName}/validate-item`;
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify({ itemData: item }),
    });
    if (!response.ok) {
      return await createErrorResponse(response);
    }
    const result = await response.json();
    return result;
  } catch (error: any) {
    let message = error.message;
    if (message) {
      message = message.replace("fetch failed", "Network Error");
    }
    return { code: 500, error: message, message: message };
  }
};

export const lastItem = async (
  baseurl: string,
  headers: Record<string, string>,
  collectionName: string
) => {
  try {
    const url = `${baseurl}/collection/${collectionName}/last-item`;
    console.log("Generated url:getItemWithUuid :>> ", url);
    const response = await fetch(url, { method: "GET", headers });
    if (!response.ok) {
      return await createErrorResponse(response);
    }
    const result = await response.json();
    return result;
  } catch (error: any) {
    let message = error.message;
    if (message) {
      message = message.replace("fetch failed", "Network Error");
    }
    return { code: 500, error: message, message: message };
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
    if (!response.ok) {
      console.log("Response is not okay");
      return await createErrorResponse(response);
    }

    const result = await response.json();
    return processResponse(result);
  } catch (error: any) {
    let message = error.message;
    if (message) {
      message = message.replace("fetch failed", "Network Error");
    }
    return { code: 500, error: message, message: message };
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
    return processResponse(result);
  } catch (error: any) {
    let message = error.message;
    if (message) {
      message = message.replace("fetch failed", "Network Error");
    }
    return { code: 500, error: message, message: message };
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
    let message = error.message;
    if (message) {
      message = message.replace("fetch failed", "Network Error");
    }
    return { code: 500, error: message, message: message };
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
    let message = error.message;
    if (message) {
      message = message.replace("fetch failed", "Network Error");
    }
    return { code: 500, error: message, message: message };
  }
};
export const clearItem = async (
  baseurl: string,
  headers: Record<string, string>,
  collectionName: string
) => {
  try {
    const url = `${baseurl}/collection/${collectionName}/clear-item/`;
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
    let message = error.message;
    if (message) {
      message = message.replace("fetch failed", "Network Error");
    }
    return { code: 500, error: message, message: message };
  }
};

export const deleteFieldItem = async (
  baseurl: string,
  headers: Record<string, string>,
  collectionName: string,
  fieldName: string
) => {
  try {
    const url = `${baseurl}/collection/${collectionName}/delete-field-record/${fieldName}`;
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
    let message = error.message;
    if (message) {
      message = message.replace("fetch failed", "Network Error");
    }
    return { code: 500, error: message, message: message };
  }
};

export const addReferenceItem = async (
  baseurl: string,
  headers: Record<string, string>,
  collectionName: string,
  data: any
) => {
  try {
    const url = `${baseurl}/collection/${collectionName}/add-reference`;
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      return await createErrorResponse(response);
    }
    const result = await response.json();
    return result;
  } catch (error: any) {
    let message = error.message;
    if (message) {
      message = message.replace("fetch failed", "Network Error");
    }
    return { code: 500, error: message, message: message };
  }
};

export const removeReferenceItem = async (
  baseurl: string,
  headers: Record<string, string>,
  collectionName: string,
  data: any
) => {
  try {
    const url = `${baseurl}/collection/${collectionName}/remove-reference`;
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      return await createErrorResponse(response);
    }
    const result = await response.json();
    return result;
  } catch (error: any) {
    let message = error.message;
    if (message) {
      message = message.replace("fetch failed", "Network Error");
    }
    return { code: 500, error: message, message: message };
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
    let message = error.message;
    if (message) {
      message = message.replace("fetch failed", "Network Error");
    }
    return { code: 500, error: message, message: message };
  }
};
