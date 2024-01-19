import { bulkDeleteItems, createItem, deleteItemWithUuid, getAllItems, getItemWithUuid, getItemsByids, getItemsCountWithFilter, getItemsWithFilter, updateItemWithUuid } from "./methods/methods";

export class DrapcodeApis {
    private project_seo_name: string;
    private xApiKey: string;
    private authorisation: string;

    constructor(project_seo_name: string, xApiKey: string = "", authorisation: string = "") {
        this.project_seo_name = project_seo_name;
        this.xApiKey = xApiKey;
        this.authorisation = authorisation;
    }

    async getAllItems(collectionName: string): Promise<any[]> {
        return getAllItems(this.project_seo_name, this.xApiKey, this.authorisation, collectionName);
    }
    async createItem(collectionName: string, body: any): Promise<any[]> {
        return createItem(this.project_seo_name, this.xApiKey, this.authorisation, collectionName, body);
    }
    async getItemsWithFilter(collectionName: string, filterUuid: string): Promise<any[]> {
        return getItemsWithFilter(this.project_seo_name, this.xApiKey, this.authorisation, collectionName, filterUuid);
    }
    async getItemsCountWithFilter(collectionName: string, filterUuid: string): Promise<any[]> {
        return getItemsCountWithFilter(this.project_seo_name, this.xApiKey, this.authorisation, collectionName, filterUuid);
    }
    async getItemWithUuid(collectionName: string, itemUuid: string): Promise<any[]> {
        return getItemWithUuid(this.project_seo_name, this.xApiKey, this.authorisation, collectionName, itemUuid);
    }
    async updateItemWithUuid(collectionName: string, itemUuid: string, body: any): Promise<any[]> {
        return updateItemWithUuid(this.project_seo_name, this.xApiKey, this.authorisation, collectionName, itemUuid, body);
    }
    async deleteItemWithUuid(collectionName: string, itemUuid: string): Promise<any[]> {
        return deleteItemWithUuid(this.project_seo_name, this.xApiKey, this.authorisation, collectionName, itemUuid);
    }
    async bulkDeleteItems(collectionName: string, body: any): Promise<any[]> {
        return bulkDeleteItems(this.project_seo_name, this.xApiKey, this.authorisation, collectionName, body);
    }
    async getItemsByids(collectionName: string, body: any): Promise<any[]> {
        return getItemsByids(this.project_seo_name, this.xApiKey, this.authorisation, collectionName, body);
    }
}