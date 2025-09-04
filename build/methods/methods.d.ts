import { Query, SearchPaginate } from "../utils/constants";
/**
 * POST Calls
 */
export declare const bulkCreateItems: (baseurl: string, headers: Record<string, string>, version: number, collectionName: string, body: any[]) => Promise<unknown>;
export declare const countItemByValue: (baseurl: string, headers: Record<string, string>, version: number, collectionName: string, fieldName: string, fieldValue: any) => Promise<unknown>;
export declare const saveCSVData: (baseurl: string, headers: Record<string, string>, version: number, collectionName: string, items: any[]) => Promise<unknown>;
export declare const validateItem: (baseurl: string, headers: Record<string, string>, version: number, collectionName: string, item: any) => Promise<unknown>;
export declare const bulkDeleteItems: (baseurl: string, headers: Record<string, string>, version: number, collectionName: string, body: any) => Promise<unknown>;
export declare const getItemsByids: (baseurl: string, headers: Record<string, string>, version: number, collectionName: string, body: any) => Promise<unknown>;
export declare const addReferenceItem: (baseurl: string, headers: Record<string, string>, version: number, collectionName: string, data: any) => Promise<unknown>;
export declare const removeReferenceItem: (baseurl: string, headers: Record<string, string>, version: number, collectionName: string, data: any) => Promise<unknown>;
/**
 * GET Calls
 */
export declare const getItemOnly: (baseurl: string, headers: Record<string, string>, version: number, collectionName: string, itemUuid: string) => Promise<unknown>;
/**
 * Final Start
 */
export declare const createItem: (baseurl: string, headers: Record<string, string>, version: number, collectionName: string, body: any) => Promise<any>;
export declare const getItemsWithFilter: (baseurl: string, headers: Record<string, string>, version: number, collectionName: string, filterUuid: string) => Promise<any>;
export declare const getItemsCountWithFilter: (baseurl: string, headers: Record<string, string>, version: number, collectionName: string, filterUuid: string) => Promise<{
    code: any;
    success: boolean;
    data: any;
    error: string;
    message: string;
} | {
    code: any;
    success: boolean;
    data: string;
    error: any;
    message: string;
} | {
    code: any;
    data: any;
    count: any;
    error: string;
    status: string;
    message: string;
} | {
    code: any;
    data: never[];
    count: number;
    error: any;
    status: string;
    message: any;
} | {
    code: number;
    error: any;
    data: never[];
    count: number;
    status: string;
}>;
export declare const getAllItems: (baseurl: string, headers: Record<string, string>, version: number, collectionName: string, reqQuery: SearchPaginate, query: Query[]) => Promise<unknown>;
export declare const getItemWithUuid: (baseurl: string, headers: Record<string, string>, version: number, collectionName: string, itemId: string) => Promise<any>;
/**
 * Final Stop
 */
export declare const lastItem: (baseurl: string, headers: Record<string, string>, version: number, collectionName: string) => Promise<unknown>;
/**
 * PUT Call
 */
export declare const updateItemWithUuid: (baseurl: string, headers: Record<string, string>, version: number, collectionName: string, itemUuid: string, body: any) => Promise<unknown>;
/**
 * DELETE Call
 */
export declare const deleteItemWithUuid: (baseurl: string, headers: Record<string, string>, version: number, collectionName: string, itemUuid: string) => Promise<unknown>;
export declare const clearItem: (baseurl: string, headers: Record<string, string>, version: number, collectionName: string) => Promise<unknown>;
export declare const deleteFieldItem: (baseurl: string, headers: Record<string, string>, version: number, collectionName: string, fieldName: string) => Promise<unknown>;
/**
 * EMAIL
 */
export declare const sendEmail: (baseurl: string, headers: Record<string, string>, version: number, templateId: string, sendTo: any) => Promise<unknown>;
