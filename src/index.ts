import { createItem, getAllItems } from "./methods/methods";

export class DrapcodeApies {
    private baseUrl: string;
    private xApiKey: string;
    private authorisation: string;

    constructor(baseUrl: string, xApiKey: string = "", authorisation: string = "") {
        this.baseUrl = baseUrl;
        this.xApiKey = xApiKey;
        this.authorisation = authorisation;
    }

    async getAllItems(collectionName: string): Promise<any[]> {
        return getAllItems(this.baseUrl, this.xApiKey, this.authorisation, collectionName);
    }
    async createItem(collectionName: string, body: any): Promise<any[]> {
        return createItem(this.baseUrl, this.xApiKey, this.authorisation, collectionName, body);
    }
}