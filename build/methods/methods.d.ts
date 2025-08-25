import { Query, SearchPaginate } from "../utils/constants";
/**
 * POST Calls
 */
export declare const createItem: (baseurl: string, headers: Record<string, string>, collectionName: string, body: any) => Promise<unknown>;
export declare const bulkCreateItems: (baseurl: string, headers: Record<string, string>, collectionName: string, body: any[]) => Promise<unknown>;
export declare const countItemByValue: (baseurl: string, headers: Record<string, string>, collectionName: string, fieldName: string, fieldValue: any) => Promise<unknown>;
export declare const saveCSVData: (baseurl: string, headers: Record<string, string>, collectionName: string, items: any[]) => Promise<unknown>;
export declare const getItemWithUuid: (baseurl: string, headers: Record<string, string>, collectionName: string, itemId: string) => Promise<unknown>;
export declare const validateItem: (baseurl: string, headers: Record<string, string>, collectionName: string, item: any) => Promise<unknown>;
export declare const bulkDeleteItems: (baseurl: string, headers: Record<string, string>, collectionName: string, body: any) => Promise<unknown>;
export declare const getItemsByids: (baseurl: string, headers: Record<string, string>, collectionName: string, body: any) => Promise<unknown>;
export declare const addReferenceItem: (baseurl: string, headers: Record<string, string>, collectionName: string, data: any) => Promise<unknown>;
export declare const removeReferenceItem: (baseurl: string, headers: Record<string, string>, collectionName: string, data: any) => Promise<unknown>;
/**
 * GET Calls
 */
export declare const getAllItems: (baseurl: string, headers: Record<string, string>, collectionName: string, reqQuery: SearchPaginate, query: Query[]) => Promise<unknown>;
export declare const getItemOnly: (baseurl: string, headers: Record<string, string>, collectionName: string, itemUuid: string) => Promise<unknown>;
export declare const getItemsWithFilter: (baseurl: string, headers: Record<string, string>, collectionName: string, filterUuid: string) => Promise<unknown>;
export declare const getItemsCountWithFilter: (baseurl: string, headers: Record<string, string>, collectionName: string, filterUuid: string) => Promise<unknown>;
export declare const lastItem: (baseurl: string, headers: Record<string, string>, collectionName: string) => Promise<unknown>;
/**
 * PUT Call
 */
export declare const updateItemWithUuid: (baseurl: string, headers: Record<string, string>, collectionName: string, itemUuid: string, body: any) => Promise<unknown>;
/**
 * DELETE Call
 */
export declare const deleteItemWithUuid: (baseurl: string, headers: Record<string, string>, collectionName: string, itemUuid: string) => Promise<unknown>;
export declare const clearItem: (baseurl: string, headers: Record<string, string>, collectionName: string) => Promise<unknown>;
export declare const deleteFieldItem: (baseurl: string, headers: Record<string, string>, collectionName: string, fieldName: string) => Promise<unknown>;
/**
 * EMAIL
 */
export declare const sendEmail: (baseurl: string, headers: Record<string, string>, templateId: string, sendTo: any) => Promise<unknown>;
