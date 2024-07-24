export declare class DrapcodeApis {
    private project_seo_name;
    private xApiKey;
    private authorization;
    private environment;
    private API_PATH;
    constructor(project_seo_name: string, xApiKey?: string, authorization?: string, environment?: string);
    private getBaseUrl;
    private getHeaders;
    getAllItems(collectionName: string): Promise<{
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
    }>;
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
