import { Query, QueryOperation, SearchPaginate } from "../utils/constants";
import { createErrorResponse, processResponse } from "../utils/util";

const request = async <T>(
  url: string,
  options: RequestInit,
  process: boolean = true
): Promise<T | { code: number; error: string; message: string }> => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) return await createErrorResponse(response);
    const result = await response.json();
    return process ? processResponse(result) : result;
  } catch (error: any) {
    const message = error?.message?.replace("fetch failed", "Network Error");
    return { code: 500, error: message, message };
  }
};

/**
 * POST Calls
 */
export const createItem = async (
  baseurl: string,
  headers: Record<string, string>,
  collectionName: string,
  body: any
) => {
  const url = `${baseurl}/collection/${collectionName}/items`;
  console.log("url :>> ", url);
  return request(url, { method: "POST", headers, body: JSON.stringify(body) });
};

export const bulkCreateItems = (
  baseurl: string,
  headers: Record<string, string>,
  collectionName: string,
  body: any[]
) => {
  const url = `${baseurl}/collection/${collectionName}/items/bulk`;
  console.log("url :>> ", url);
  return request(url, { method: "POST", headers, body: JSON.stringify(body) });
};

export const countItemByValue = async (
  baseurl: string,
  headers: Record<string, string>,
  collectionName: string,
  fieldName: string,
  fieldValue: any
) => {
  const url = `${baseurl}/collection/${collectionName}/count-by-field`;
  console.log("url :>> ", url);
  return request(url, {
    method: "POST",
    headers,
    body: JSON.stringify({ fieldName, fieldValue }),
  });
};

export const saveCSVData = async (
  baseurl: string,
  headers: Record<string, string>,
  collectionName: string,
  items: any[]
) => {
  const url = `${baseurl}/collection/${collectionName}/csv-items`;
  console.log("url :>> ", url);
  return request(url, {
    method: "POST",
    headers,
    body: JSON.stringify({ items }),
  });
};

export const getItemWithUuid = async (
  baseurl: string,
  headers: Record<string, string>,
  collectionName: string,
  itemId: string
) => {
  const url = `${baseurl}/collection/${collectionName}/item/${itemId}`;
  console.log("url :>> ", url);
  return request(url, { method: "POST", headers });
};

export const validateItem = async (
  baseurl: string,
  headers: Record<string, string>,
  collectionName: string,
  item: any
) => {
  const url = `${baseurl}/collection/${collectionName}/validate-item`;
  console.log("url :>> ", url);
  return request(url, {
    method: "POST",
    headers,
    body: JSON.stringify({ itemData: item }),
  });
};

export const bulkDeleteItems = async (
  baseurl: string,
  headers: Record<string, string>,
  collectionName: string,
  body: any
) => {
  const url = `${baseurl}/collection/${collectionName}/bulkDelete`;
  console.log("url :>> ", url);
  return request(url, { method: "POST", headers, body });
};

export const getItemsByids = async (
  baseurl: string,
  headers: Record<string, string>,
  collectionName: string,
  body: any
) => {
  const url = `${baseurl}/collection/${collectionName}/itemsbyids`;
  console.log("url :>> ", url);
  return request(url, { method: "POST", headers, body });
};

export const addReferenceItem = async (
  baseurl: string,
  headers: Record<string, string>,
  collectionName: string,
  data: any
) => {
  const url = `${baseurl}/collection/${collectionName}/add-reference`;
  console.log("url :>> ", url);
  return request(url, { method: "POST", headers, body: JSON.stringify(data) });
};

export const removeReferenceItem = async (
  baseurl: string,
  headers: Record<string, string>,
  collectionName: string,
  data: any
) => {
  const url = `${baseurl}/collection/${collectionName}/remove-reference`;
  console.log("url :>> ", url);
  return request(url, { method: "POST", headers, body: JSON.stringify(data) });
};

/**
 * GET Calls
 */

export const getAllItems = async (
  baseurl: string,
  headers: Record<string, string>,
  collectionName: string,
  reqQuery: SearchPaginate,
  query: Query[]
) => {
  const queryParams = new URLSearchParams();

  if (reqQuery?.sortField) queryParams.append("sortField", reqQuery.sortField);
  if (reqQuery?.sortOrder) queryParams.append("sortOrder", reqQuery.sortOrder);
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
      queryParams.append(`${field}:${conditionString}`, `${value}`);
    });
  }
  const url = `${baseurl}/collection/${collectionName}/items?${queryParams.toString()}`;
  console.log("url :>> ", url);
  return request(url, { method: "GET", headers });
};

export const getItemOnly = async (
  baseurl: string,
  headers: Record<string, string>,
  collectionName: string,
  itemUuid: string
) => {
  const url = `${baseurl}/collection/${collectionName}/item-only/${itemUuid}`;
  console.log("url :>> ", url);
  return request(url, { method: "GET", headers });
};

export const getItemsWithFilter = async (
  baseurl: string,
  headers: Record<string, string>,
  collectionName: string,
  filterUuid: string
) => {
  const url = `${baseurl}/collection/${collectionName}/filter/${filterUuid}/items`;
  console.log("url :>> ", url);
  return request(url, { method: "GET", headers });
};

export const getItemsCountWithFilter = async (
  baseurl: string,
  headers: Record<string, string>,
  collectionName: string,
  filterUuid: string
) => {
  const url = `${baseurl}/collection/${collectionName}/filter/${filterUuid}/count`;
  console.log("url :>> ", url);
  return request(url, { method: "GET", headers });
};

export const lastItem = async (
  baseurl: string,
  headers: Record<string, string>,
  collectionName: string
) => {
  const url = `${baseurl}/collection/${collectionName}/last-item`;
  console.log("url :>> ", url);
  return request(url, { method: "GET", headers });
};
/**
 * PUT Call
 */

export const updateItemWithUuid = async (
  baseurl: string,
  headers: Record<string, string>,
  collectionName: string,
  itemUuid: string,
  body: any
) => {
  const url = `${baseurl}/collection/${collectionName}/item/${itemUuid}`;
  console.log("url :>> ", url);
  return request(url, { method: "PUT", headers, body: JSON.stringify(body) });
};

/**
 * DELETE Call
 */
export const deleteItemWithUuid = async (
  baseurl: string,
  headers: Record<string, string>,
  collectionName: string,
  itemUuid: string
) => {
  const url = `${baseurl}/collection/${collectionName}/item/${itemUuid}`;
  console.log("url :>> ", url);
  return request(url, { method: "DELETE", headers });
};

export const clearItem = async (
  baseurl: string,
  headers: Record<string, string>,
  collectionName: string
) => {
  const url = `${baseurl}/collection/${collectionName}/clear-item/`;
  console.log("url :>> ", url);
  return request(url, { method: "DELETE", headers });
};

export const deleteFieldItem = async (
  baseurl: string,
  headers: Record<string, string>,
  collectionName: string,
  fieldName: string
) => {
  const url = `${baseurl}/collection/${collectionName}/delete-field-record/${fieldName}`;
  console.log("url :>> ", url);
  return request(url, { method: "DELETE", headers });
};

/**
 * EMAIL
 */
export const sendEmail = async (
  baseurl: string,
  headers: Record<string, string>,
  templateId: string,
  sendTo: any
) => {
  const url = `${baseurl}/sendEmail/${templateId}/user/${sendTo}`;
  console.log("url :>> ", url);
  return request(url, { method: "POST", headers });
};
