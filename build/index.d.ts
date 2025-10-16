import { Query, SearchPaginate } from "./utils/constants";
export declare enum Environment {
    PRODUCTION = "PRODUCTION",
    PREVIEW = "PREVIEW",
    BETA = "BETA",
    ALPHA = "ALPHA"
}
export interface DrapcodeApiOptions {
    xApiKey?: string;
    xTenantId?: string;
    xSubTenantId?: string;
    authorization?: string;
    environment?: Environment | keyof typeof Environment | string;
    builderKey?: string;
    version?: number;
}
export declare class DrapcodeApis {
    private seoName;
    private xApiKey?;
    private xTenantId?;
    private xSubTenantId?;
    private authorization?;
    private environment;
    private builderKey?;
    private API_PATH;
    private version?;
    private protocol;
    constructor(projectSeoName: string, opts?: DrapcodeApiOptions);
    constructor(project_seo_name: string, xApiKey: string, authorization: string, environment: Environment | string);
    setProjectSeoName(seo_name: string): void;
    getProjectSeoName(): string;
    setXApiKey(apiKey: string): void;
    getXApiKey(): string | undefined;
    setAuthorization(authorization: string): void;
    getAuthorization(): string | undefined;
    setEnvironment(env: string): void;
    getEnvironment(): string | undefined;
    setBuilderKey(builderKey: string): void;
    getBuilderKey(): string | undefined;
    setVersion(version: number): void;
    getVersion(): number | undefined;
    setXTenantId(tenantId: string): void;
    getXTenantId(): string | undefined;
    setXSubTenantId(subTenantId: string): void;
    getXSubTenantId(): string | undefined;
    info(): any;
    private getEnvSubdomain;
    getBaseUrl(): string;
    getHeaders(): Record<string, string>;
    private callApi;
    getAllItems(collectionName: string, reqQuery?: SearchPaginate | any, query?: Query[] | []): Promise<unknown>;
    createItem(collectionName: string, body: any): Promise<any>;
    getItemsWithFilter(collectionName: string, filterUuid: string): Promise<any>;
    getItemsCountWithFilter(collectionName: string, filterUuid: string): Promise<{
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
    getItemWithUuid(collectionName: string, itemUuid: string): Promise<any>;
    getItemOnly(collectionName: string, itemUuid: string): Promise<unknown>;
    countItemByValue(collectionName: string, fieldName: string, fieldValue: any): Promise<unknown>;
    saveCSVData(collectionName: string, items: any[]): Promise<unknown>;
    validateItem(collectionName: string, item: any): Promise<unknown>;
    lastItem(collectionName: string): Promise<unknown>;
    updateItemWithUuid(collectionName: string, itemUuid: string, body: any): Promise<unknown>;
    clearItem(collectionName: string): Promise<unknown>;
    deleteFieldItem(collectionName: string, fieldName: string): Promise<unknown>;
    deleteItemWithUuid(collectionName: string, itemUuid: string): Promise<unknown>;
    bulkDeleteItems(collectionName: string, body: any): Promise<unknown>;
    removeReferenceItem(collectionName: string, body: any): Promise<unknown>;
    addReferenceItem(collectionName: string, body: any): Promise<unknown>;
    getItemsByids(collectionName: string, body: any): Promise<unknown>;
    sendEmail(templateId: string, sendTo: string): Promise<unknown>;
}
export * from "./utils/index";
export * from "./utils/crypt";
export * from "./utils/constants";
