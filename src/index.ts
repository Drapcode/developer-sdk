import { bulkDeleteItems, createItem, deleteItemWithUuid, getAllItems, getItemWithUuid, getItemsByids, getItemsCountWithFilter, getItemsWithFilter, sendEmail, updateItemWithUuid } from "./methods/methods";
export class DrapcodeApis {
    private project_seo_name: string;
    private xApiKey: string;
    private authorisation: string;
    private environment: string;
    constructor(project_seo_name: string, xApiKey: string = "", authorisation: string = "", environment: string = 'PRODUCTION') {
        this.project_seo_name = project_seo_name;
        this.xApiKey = xApiKey;
        this.authorisation = authorisation;
        this.environment = environment
    }

    async getAllItems(collectionName: string): Promise<any[]> {
        return getAllItems(this.project_seo_name, this.xApiKey, this.authorisation, collectionName, this.environment);
    }
    async createItem(collectionName: string, body: any): Promise<any[]> {
        return createItem(this.project_seo_name, this.xApiKey, this.authorisation, collectionName, body, this.environment);
    }
    async getItemsWithFilter(collectionName: string, filterUuid: string): Promise<any[]> {
        return getItemsWithFilter(this.project_seo_name, this.xApiKey, this.authorisation, collectionName, filterUuid, this.environment);
    }
    async getItemsCountWithFilter(collectionName: string, filterUuid: string): Promise<any[]> {
        return getItemsCountWithFilter(this.project_seo_name, this.xApiKey, this.authorisation, collectionName, filterUuid, this.environment);
    }
    async getItemWithUuid(collectionName: string, itemUuid: string): Promise<any[]> {
        return getItemWithUuid(this.project_seo_name, this.xApiKey, this.authorisation, collectionName, itemUuid, this.environment);
    }
    async updateItemWithUuid(collectionName: string, itemUuid: string, body: any): Promise<any[]> {
        return updateItemWithUuid(this.project_seo_name, this.xApiKey, this.authorisation, collectionName, itemUuid, body, this.environment);
    }
    async deleteItemWithUuid(collectionName: string, itemUuid: string): Promise<any[]> {
        return deleteItemWithUuid(this.project_seo_name, this.xApiKey, this.authorisation, collectionName, itemUuid, this.environment);
    }
    async bulkDeleteItems(collectionName: string, body: any): Promise<any[]> {
        return bulkDeleteItems(this.project_seo_name, this.xApiKey, this.authorisation, collectionName, body, this.environment);
    }
    async getItemsByids(collectionName: string, body: any): Promise<any[]> {
        return getItemsByids(this.project_seo_name, this.xApiKey, this.authorisation, collectionName, body, this.environment);
    }
    async sendEmail(templateId: string, sendTo: string): Promise<any[]> {
        return sendEmail(this.project_seo_name, this.xApiKey, this.authorisation, templateId, sendTo, this.environment)
    }
}