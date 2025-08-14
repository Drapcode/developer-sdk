import { Query, SearchPaginate } from "./utils/constants";
export declare class DrapcodeApis {
    private project_seo_name;
    private xApiKey;
    private authorization;
    private environment;
    private API_PATH;
    private protocol;
    constructor(project_seo_name: string, xApiKey?: string, authorization?: string, environment?: string);
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
        error: any;
        message: any;
        data: string;
        totalItems?: undefined;
        totalPages?: undefined;
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
        error: string;
        message: string;
    } | undefined>;
    getItemsWithFilter(collectionName: string, filterUuid: string): Promise<{
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
    getItemsCountWithFilter(collectionName: string, filterUuid: string): Promise<{
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
    getItemWithUuid(collectionName: string, itemUuid: string): Promise<{
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
    updateItemWithUuid(collectionName: string, itemUuid: string, body: any): Promise<{
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
    deleteItemWithUuid(collectionName: string, itemUuid: string): Promise<{
        code: any;
        success: boolean;
        data: any;
        error: string;
        message: string;
    }>;
    bulkDeleteItems(collectionName: string, body: any): Promise<{
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
    getItemsByids(collectionName: string, body: any): Promise<{
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
    sendEmail(templateId: string, sendTo: string): Promise<{
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
}
export * from "./utils/index";
export * from "./utils/crypt";
export * from "./utils/constants";
