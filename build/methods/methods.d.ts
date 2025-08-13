import { Query, SearchPaginate } from "../utils/constants";
export declare const getAllItems: (baseurl: string, headers: Record<string, string>, collectionName: string, reqQuery: SearchPaginate, query: Query[]) => Promise<{
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
    success: boolean;
    error: any;
    message: any;
    data: string;
    totalItems?: undefined;
    totalPages?: undefined;
} | {
    code: number;
    error: any;
    message: any;
}>;
export declare const createItem: (baseurl: string, headers: Record<string, string>, collectionName: string, body: any) => Promise<{
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
    code: number;
    error: any;
    message: any;
} | undefined>;
export declare const getItemsWithFilter: (baseurl: string, headers: Record<string, string>, collectionName: string, filterUuid: string) => Promise<{
    code: any;
    success: boolean;
    error: any;
    message: any;
    data: string;
    totalItems?: undefined;
    totalPages?: undefined;
} | {
    code: number;
    success: boolean;
    error: string;
    message: string;
    data: any;
    totalItems: any;
    totalPages: any;
} | {
    code: number;
    error: any;
    message: any;
}>;
export declare const getItemsCountWithFilter: (baseurl: string, headers: Record<string, string>, collectionName: string, filterUuid: string) => Promise<{
    code: any;
    success: boolean;
    error: any;
    message: any;
    data: string;
    totalItems?: undefined;
    totalPages?: undefined;
} | {
    code: number;
    success: boolean;
    error: string;
    message: string;
    data: any;
    totalItems: any;
    totalPages: any;
} | {
    code: number;
    error: any;
    message: any;
}>;
export declare const getItemWithUuid: (baseurl: string, headers: Record<string, string>, collectionName: string, itemUuid: string) => Promise<any>;
export declare const getItemOnly: (baseurl: string, headers: Record<string, string>, collectionName: string, itemUuid: string) => Promise<any>;
export declare const countItemByValue: (baseurl: string, headers: Record<string, string>, collectionName: string, fieldName: string, fieldValue: any) => Promise<any>;
export declare const saveCSVData: (baseurl: string, headers: Record<string, string>, collectionName: string, items: any[]) => Promise<any>;
export declare const validateItem: (baseurl: string, headers: Record<string, string>, collectionName: string, item: any) => Promise<any>;
export declare const lastItem: (baseurl: string, headers: Record<string, string>, collectionName: string) => Promise<any>;
export declare const updateItemWithUuid: (baseurl: string, headers: Record<string, string>, collectionName: string, itemUuid: string, body: any) => Promise<{
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
    success: boolean;
    error: any;
    message: any;
    data: string;
    totalItems?: undefined;
    totalPages?: undefined;
} | {
    code: number;
    error: any;
    message: any;
}>;
export declare const deleteItemWithUuid: (baseurl: string, headers: Record<string, string>, collectionName: string, itemUuid: string) => Promise<{
    code: any;
    success: boolean;
    data: any;
    error: string;
    message: string;
} | {
    code: number;
    error: any;
    message: any;
    success?: undefined;
    data?: undefined;
}>;
export declare const bulkDeleteItems: (baseurl: string, headers: Record<string, string>, collectionName: string, body: any) => Promise<{
    success: boolean;
    data: any;
    error: string;
    message: string;
    code?: undefined;
} | {
    code: number;
    error: any;
    message: any;
    success?: undefined;
    data?: undefined;
}>;
export declare const getItemsByids: (baseurl: string, headers: Record<string, string>, collectionName: string, body: any) => Promise<{
    success: boolean;
    data: any;
    error: string;
    message: string;
    code?: undefined;
} | {
    code: number;
    error: any;
    message: any;
    success?: undefined;
    data?: undefined;
}>;
export declare const clearItem: (baseurl: string, headers: Record<string, string>, collectionName: string) => Promise<{
    code: any;
    success: boolean;
    data: any;
    error: string;
    message: string;
} | {
    code: number;
    error: any;
    message: any;
    success?: undefined;
    data?: undefined;
}>;
export declare const deleteFieldItem: (baseurl: string, headers: Record<string, string>, collectionName: string, fieldName: string) => Promise<{
    code: any;
    success: boolean;
    data: any;
    error: string;
    message: string;
} | {
    code: number;
    error: any;
    message: any;
    success?: undefined;
    data?: undefined;
}>;
export declare const addReferenceItem: (baseurl: string, headers: Record<string, string>, collectionName: string, data: any) => Promise<any>;
export declare const removeReferenceItem: (baseurl: string, headers: Record<string, string>, collectionName: string, data: any) => Promise<any>;
export declare const sendEmail: (baseurl: string, headers: Record<string, string>, templateId: string, sendTo: any) => Promise<{
    success: boolean;
    data: any;
    error: string;
    message: string;
    code?: undefined;
} | {
    code: number;
    error: any;
    message: any;
    success?: undefined;
    data?: undefined;
}>;
