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
    error: any;
    message: any;
    data: string;
    totalItems?: undefined;
    totalPages?: undefined;
}>;
export declare const createItem: (baseurl: string, headers: Record<string, string>, collectionName: string, body: any) => Promise<{
    code: any;
    success: boolean;
    data: any;
    error: string;
    message: string;
} | {
    success: boolean;
    data: string;
    error: string;
    message: string;
} | undefined>;
export declare const getItemsWithFilter: (baseurl: string, headers: Record<string, string>, collectionName: string, filterUuid: string) => Promise<{
    code: any;
    success: boolean;
    data: any;
    error: string;
    message: string;
} | {
    code: any;
    success: boolean;
    error: any;
    message: any;
    data: string;
    totalItems?: undefined;
    totalPages?: undefined;
}>;
export declare const getItemsCountWithFilter: (baseurl: string, headers: Record<string, string>, collectionName: string, filterUuid: string) => Promise<{
    code: any;
    success: boolean;
    data: any;
    error: string;
    message: string;
} | {
    code: any;
    success: boolean;
    error: any;
    message: any;
    data: string;
    totalItems?: undefined;
    totalPages?: undefined;
}>;
export declare const getItemWithUuid: (baseurl: string, headers: Record<string, string>, collectionName: string, itemUuid: string) => Promise<{
    code: any;
    success: boolean;
    data: any;
    error: string;
    message: string;
} | {
    code: any;
    success: boolean;
    error: any;
    message: any;
    data: string;
    totalItems?: undefined;
    totalPages?: undefined;
}>;
export declare const updateItemWithUuid: (baseurl: string, headers: Record<string, string>, collectionName: string, itemUuid: string, body: any) => Promise<{
    code: any;
    success: boolean;
    data: any;
    error: string;
    message: string;
} | {
    code: any;
    success: boolean;
    error: any;
    message: any;
    data: string;
    totalItems?: undefined;
    totalPages?: undefined;
}>;
export declare const deleteItemWithUuid: (baseurl: string, headers: Record<string, string>, collectionName: string, itemUuid: string) => Promise<{
    code: any;
    success: boolean;
    data: any;
    error: string;
    message: string;
}>;
export declare const bulkDeleteItems: (baseurl: string, headers: Record<string, string>, collectionName: string, body: any) => Promise<{
    code: any;
    success: boolean;
    data: any;
    error: string;
    message: string;
} | {
    success: boolean;
    data: any;
    error: string;
    message: string;
}>;
export declare const getItemsByids: (baseurl: string, headers: Record<string, string>, collectionName: string, body: any) => Promise<{
    code: any;
    success: boolean;
    data: any;
    error: string;
    message: string;
} | {
    success: boolean;
    data: any;
    error: string;
    message: string;
}>;
export declare const sendEmail: (baseurl: string, headers: Record<string, string>, templateId: string, sendTo: any) => Promise<{
    code: any;
    success: boolean;
    data: any;
    error: string;
    message: string;
} | {
    success: boolean;
    data: any;
    error: string;
    message: string;
}>;
/**
 * {
 * code,
 * success
 * data,
 * error,
 * message,
 * }
 */
