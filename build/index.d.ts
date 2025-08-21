import { Query, SearchPaginate } from "./utils/constants";
export declare class DrapcodeApis {
    private project_seo_name;
    private xApiKey;
    private authorization;
    private environment;
    private API_PATH;
    private builderKey;
    constructor(project_seo_name: string, xApiKey?: string, authorization?: string, environment?: string, builderKey?: string);
    getBaseUrl(): string;
    getHeaders(): Record<string, string>;
    getAllItems(collectionName: string, reqQuery?: SearchPaginate | any, query?: Query[] | []): Promise<{
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
    createItem(collectionName: string, body: any): Promise<{
        code: any;
        success: boolean;
        data: any;
        error: string;
        message: string;
    } | {
        success: boolean;
        data: string;
        error: any;
        message: string;
    } | {
        code: number;
        error: any;
        message: any;
    } | undefined>;
    getItemsWithFilter(collectionName: string, filterUuid: string): Promise<{
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
    getItemsCountWithFilter(collectionName: string, filterUuid: string): Promise<{
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
    getItemWithUuid(collectionName: string, itemUuid: string): Promise<any>;
    getItemOnly(collectionName: string, itemUuid: string): Promise<any>;
    countItemByValue(collectionName: string, fieldName: string, fieldValue: any): Promise<any>;
    saveCSVData(collectionName: string, items: any[]): Promise<any>;
    validateItem(collectionName: string, item: any): Promise<any>;
    lastItem(collectionName: string): Promise<any>;
    updateItemWithUuid(collectionName: string, itemUuid: string, body: any): Promise<{
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
    clearItem(collectionName: string): Promise<{
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
    deleteFieldItem(collectionName: string, fieldName: string): Promise<{
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
    deleteItemWithUuid(collectionName: string, itemUuid: string): Promise<{
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
    bulkDeleteItems(collectionName: string, body: any): Promise<{
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
    removeReferenceItem(collectionName: string, body: any): Promise<{
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
    addReferenceItem(collectionName: string, body: any): Promise<{
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
    getItemsByids(collectionName: string, body: any): Promise<{
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
    sendEmail(templateId: string, sendTo: string): Promise<{
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
}
export * from "./utils/index";
export * from "./utils/crypt";
export * from "./utils/constants";
