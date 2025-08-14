import {
  bulkDeleteItems,
  clearItem,
  countItemByValue,
  createItem,
  deleteFieldItem,
  deleteItemWithUuid,
  getAllItems,
  getItemOnly,
  getItemWithUuid,
  getItemsByids,
  getItemsCountWithFilter,
  getItemsWithFilter,
  lastItem,
  saveCSVData,
  sendEmail,
  updateItemWithUuid,
  validateItem,
} from "./methods/methods";
import { Query, SearchPaginate } from "./utils/constants";

export class DrapcodeApis {
  private project_seo_name: string;
  private xApiKey: string;
  private authorization: string; //authorization
  private environment: string;
  // private API_PATH = "drapcode.io/api/v1/developer";
  private API_PATH = "webkonnect.site/api/v1/developer";
  // private API_PATH = "prodeless.com:5002/api/v1/developer";

  private protocol = "https";
  // private protocol = "http";

  private builderKey: string; //for builder auth

  constructor(
    project_seo_name: string,
    xApiKey: string = "",
    authorization: string = "",
    environment: string = "PRODUCTION",
    builderKey: string = ""
  ) {
    this.project_seo_name = project_seo_name;
    this.xApiKey = xApiKey;
    this.authorization = authorization;
    this.environment = environment;
    this.builderKey = builderKey;
  }
  public getBaseUrl(): string {
    switch (this.environment.toUpperCase()) {
      case "PRODUCTION":
        return `${this.protocol}://${this.project_seo_name}.api.${this.API_PATH}`;
      case "PREVIEW":
        return `${this.protocol}://${this.project_seo_name}.api.preview.${this.API_PATH}`;
      case "BETA":
        return `${this.protocol}://${this.project_seo_name}.api.sandbox.${this.API_PATH}`;
      case "ALPHA":
        return `${this.protocol}://${this.project_seo_name}.api.uat.${this.API_PATH}`;
      default:
        return `${this.protocol}://${this.project_seo_name}.api.${this.API_PATH}`;
    }
  }
  public getHeaders(): Record<string, string> {
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
    if (this.builderKey) {
      headers["BuilderKey"] = this.builderKey;
    }
    return headers;
  }
  async getAllItems(
    collectionName: string,
    reqQuery: SearchPaginate | any = null,
    query: Query[] | [] = []
  ) {
    return getAllItems(
      this.getBaseUrl(),
      this.getHeaders(),
      collectionName,
      reqQuery,
      query
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
  async getItemOnly(collectionName: string, itemUuid: string) {
    return getItemOnly(
      this.getBaseUrl(),
      this.getHeaders(),
      collectionName,
      itemUuid
    );
  }
  async countItemByValue(
    collectionName: string,
    fieldName: string,
    fieldValue: any
  ) {
    return countItemByValue(
      this.getBaseUrl(),
      this.getHeaders(),
      collectionName,
      fieldName,
      fieldValue
    );
  }
  async saveCSVData(collectionName: string, items: any[]) {
    return saveCSVData(
      this.getBaseUrl(),
      this.getHeaders(),
      collectionName,
      items
    );
  }
  async validateItem(collectionName: string, item: any) {
    return validateItem(
      this.getBaseUrl(),
      this.getHeaders(),
      collectionName,
      item
    );
  }
  async lastItem(collectionName: string) {
    return lastItem(this.getBaseUrl(), this.getHeaders(), collectionName);
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
  async clearItem(collectionName: string) {
    return clearItem(this.getBaseUrl(), this.getHeaders(), collectionName);
  }
  async deleteFieldItem(collectionName: string, fieldName: string) {
    return deleteFieldItem(
      this.getBaseUrl(),
      this.getHeaders(),
      collectionName,
      fieldName
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
  async removeReferenceItem(collectionName: string, body: any) {
    return bulkDeleteItems(
      this.getBaseUrl(),
      this.getHeaders(),
      collectionName,
      body
    );
  }
  async addReferenceItem(collectionName: string, body: any) {
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
export * from "./utils/crypt";
export * from "./utils/constants";
