export declare enum QueryOperation {
    EQUALS = "EQUALS",
    IS_NOT_NULL = "IS_NOT_NULL",
    IS_NULL = "IS_NULL",
    LIKE = "LIKE",
    LESS_THAN_EQUALS_TO = "LESS_THAN_EQUALS_TO",
    GREATER_THAN_EQUALS_TO = "GREATER_THAN_EQUALS_TO",
    LESS_THAN = "LESS_THAN",
    GREATER_THAN = "GREATER_THAN",
    IN_LIST = "IN_LIST",
    NOT_IN_LIST = "NOT_IN_LIST"
}
type Query = {
    field: string;
    condition: QueryOperation;
    value: string;
};
export declare const getAllItems: (baseurl: string, headers: Record<string, string>, collectionName: string, query: Query[]) => Promise<{
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
    success: boolean;
    data: string;
    error: string;
    message: string;
    code?: undefined;
} | {
    code: any;
    success: boolean;
    data: any;
    error: string;
    message: any;
}>;
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
export {};
/**
 * {
 * code,
 * success
 * data,
 * error,
 * message,
 * }
 */
