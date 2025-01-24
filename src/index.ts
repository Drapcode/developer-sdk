import {
  bulkDeleteItems,
  createItem,
  deleteItemWithUuid,
  getAllItems,
  getItemWithUuid,
  getItemsByids,
  getItemsCountWithFilter,
  getItemsWithFilter,
  sendEmail,
  updateItemWithUuid,
} from "./methods/methods";
export class DrapcodeApis {
  private project_seo_name: string;
  private xApiKey: string;
  private authorization: string; //authorization
  private environment: string;
  // private API_PATH = "drapcode.io/api/v1/developer";
  private API_PATH = "prodeless.com:6002/api/v1/developer";

  constructor(
    project_seo_name: string,
    xApiKey: string = "",
    authorization: string = "",
    environment: string = "PRODUCTION"
  ) {
    this.project_seo_name = project_seo_name;
    this.xApiKey = xApiKey;
    this.authorization = authorization;
    this.environment = environment;
  }
  private getBaseUrl(): string {
    switch (this.environment) {
      case "PRODUCTION":
        return `http://${this.project_seo_name}.api.${this.API_PATH}`;
      case "PREVIEW":
        return `http://${this.project_seo_name}.api.preview.${this.API_PATH}`;
      case "BETA":
        return `https://${this.project_seo_name}.api.sandbox.${this.API_PATH}`;
      case "ALPHA":
        return `https://${this.project_seo_name}.api.uat.${this.API_PATH}`;
      default:
        return `http://${this.project_seo_name}.api.${this.API_PATH}`;
    }
  }
  private getHeaders(): Record<string, string> {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    if (this.xApiKey) {
      headers["x-api-key"] = this.xApiKey;
    }
    if (this.authorization) {
      headers["Authorization"] = this.authorization;
    }
    console.log("hereis header", headers);
    return headers;
  }

  async getAllItems(collectionName: string, reqQuery: any) {
    console.log("hereis collectionName", collectionName);

    return getAllItems(
      this.getBaseUrl(),
      this.getHeaders(),
      collectionName,
      reqQuery
    );
  }
  async createItem(collectionName: string, body: any) {
    return createItem(
      this.getBaseUrl(),
      this.getHeaders(),
      collectionName,
      body
    );
  }
  async getItemsWithFilter(collectionName: string, filterUuid: string) {
    return getItemsWithFilter(
      this.getBaseUrl(),
      this.getHeaders(),
      collectionName,
      filterUuid
    );
  }
  async getItemsCountWithFilter(collectionName: string, filterUuid: string) {
    return getItemsCountWithFilter(
      this.getBaseUrl(),
      this.getHeaders(),
      collectionName,
      filterUuid
    );
  }
  async getItemWithUuid(collectionName: string, itemUuid: string) {
    return getItemWithUuid(
      this.getBaseUrl(),
      this.getHeaders(),
      collectionName,
      itemUuid
    );
  }
  async updateItemWithUuid(
    collectionName: string,
    itemUuid: string,
    body: any
  ) {
    return updateItemWithUuid(
      this.getBaseUrl(),
      this.getHeaders(),
      collectionName,
      itemUuid,
      body
    );
  }
  async deleteItemWithUuid(collectionName: string, itemUuid: string) {
    return deleteItemWithUuid(
      this.getBaseUrl(),
      this.getHeaders(),
      collectionName,
      itemUuid
    );
  }
  async bulkDeleteItems(collectionName: string, body: any) {
    return bulkDeleteItems(
      this.getBaseUrl(),
      this.getHeaders(),
      collectionName,
      body
    );
  }
  async getItemsByids(collectionName: string, body: any) {
    return getItemsByids(
      this.getBaseUrl(),
      this.getHeaders(),
      collectionName,
      body
    );
  }
  async sendEmail(templateId: string, sendTo: string) {
    return sendEmail(this.getBaseUrl(), this.getHeaders(), templateId, sendTo);
  }
}
export * from "./utils/index";
