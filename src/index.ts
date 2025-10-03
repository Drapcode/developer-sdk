import {
  addReferenceItem,
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
  removeReferenceItem,
  saveCSVData,
  sendEmail,
  updateItemWithUuid,
  validateItem,
} from "./methods/methods";
import { Query, SearchPaginate } from "./utils/constants";

export enum Environment {
  PRODUCTION = "PRODUCTION",
  PREVIEW = "PREVIEW",
  BETA = "BETA",
  ALPHA = "ALPHA",
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

export class DrapcodeApis {
  private seoName: string;
  private xApiKey?: string;
  private xTenantId?: string;
  private xSubTenantId?: string;
  private authorization?: string; //authorization
  private environment: Environment | string;
  private builderKey?: string; //for builder auth

  //Network/URL Related

  // private API_PATH = "drapcode.io/api/";
  private API_PATH = "webkonnect.site/api";

  // private API_PATH = "prodeless.com:5002/api";

  private version?: number = 1;

  private protocol: string = "https";
  // private protocol: string = "http";

  constructor(projectSeoName: string, opts: DrapcodeApiOptions = {}) {
    this.seoName = projectSeoName;

    this.xApiKey = opts.xApiKey;
    this.xTenantId = opts.xTenantId;
    this.xSubTenantId = opts.xSubTenantId;
    this.authorization = opts.authorization;
    this.environment =
      (opts.environment as Environment) ?? Environment.PRODUCTION;
    this.builderKey = opts.builderKey;
    this.version = opts.version;
  }

  public setProjectSeoName(seo_name: string): void {
    this.seoName = seo_name;
  }
  public getProjectSeoName(): string {
    return this.seoName;
  }

  public setXApiKey(apiKey: string) {
    this.xApiKey = apiKey;
  }
  public getXApiKey(): string | undefined {
    return this.xApiKey;
  }

  public setAuthorization(authorization: string) {
    this.authorization = authorization;
  }
  public getAuthorization(): string | undefined {
    return this.authorization;
  }

  public setEnvironment(env: string) {
    this.environment = env;
  }
  public getEnvironment(): string | undefined {
    return this.environment;
  }

  public setBuilderKey(builderKey: string) {
    this.builderKey = builderKey;
  }
  public getBuilderKey(): string | undefined {
    return this.builderKey;
  }

  public setVersion(version: number) {
    this.version = version;
  }

  public getVersion(): number | undefined {
    return this.version;
  }

  public setXTenantId(tenantId: string) {
    this.xTenantId = tenantId;
  }
  public getXTenantId(): string | undefined {
    return this.xTenantId;
  }

  public setXSubTenantId(subTenantId: string) {
    this.xSubTenantId = subTenantId;
  }
  public getXSubTenantId(): string | undefined {
    return this.xSubTenantId;
  }

  public info(): any {
    // private protocol :string= "https"
    return {
      seoName: this.seoName,
      xApiKey: this.xApiKey,
      xTenantId: this.xTenantId,
      xSubTenantId: this.xSubTenantId,
      authorization: this.authorization,
      environment: this.environment,
      builderKey: this.builderKey,
      api: this.API_PATH,
      version: this.version,
      protocol: this.protocol,
      headers: this.getHeaders(),
      url: this.getBaseUrl(),
    };
  }

  private getEnvSubdomain(): string {
    const env = String(this.environment).toUpperCase();
    switch (env) {
      case Environment.PREVIEW:
        return "preview";
      case Environment.BETA:
        return "sandbox";
      case Environment.ALPHA:
        return "uat";
      case Environment.PRODUCTION:
      default:
        return ""; // no extra subdomain for prod
    }
  }

  public getBaseUrl(): string {
    const envSub = this.getEnvSubdomain();
    if (envSub) {
      return `${this.protocol}://${this.seoName}.api.${envSub}.${this.API_PATH}/v${this.version}/developer`;
    }
    return `${this.protocol}://${this.seoName}.api.${this.API_PATH}/v${this.version}/developer`;
  }

  public getHeaders(): Record<string, string> {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    if (this.xApiKey) {
      headers["x-api-key"] = this.xApiKey;
    }
    if (this.xTenantId) {
      headers["x-tenant-id"] = this.xTenantId;
    }
    if (this.xSubTenantId) {
      headers["x-sub-tenant-id"] = this.xSubTenantId;
    }
    if (this.authorization) {
      headers["Authorization"] = this.authorization;
    }
    if (this.builderKey) {
      headers["builder-key"] = this.builderKey;
    }
    return headers;
  }

  private async callApi<T>(
    fn: (
      baseUrl: string,
      headers: Record<string, string>,
      version: number,
      ...args: any[]
    ) => Promise<T>,
    name: string,
    ...args: any[]
  ): Promise<T> {
    return fn(
      this.getBaseUrl(),
      this.getHeaders(),
      this.getVersion() || 2,
      name,
      ...args
    );
  }

  async getAllItems(
    collectionName: string,
    reqQuery: SearchPaginate | any = null,
    query: Query[] | [] = []
  ) {
    return this.callApi(getAllItems, collectionName, reqQuery, query);
  }
  async createItem(collectionName: string, body: any) {
    return this.callApi(createItem, collectionName, body);
  }
  async getItemsWithFilter(collectionName: string, filterUuid: string) {
    return this.callApi(getItemsWithFilter, collectionName, filterUuid);
  }
  async getItemsCountWithFilter(collectionName: string, filterUuid: string) {
    return this.callApi(getItemsCountWithFilter, collectionName, filterUuid);
  }
  async getItemWithUuid(collectionName: string, itemUuid: string) {
    return this.callApi(getItemWithUuid, collectionName, itemUuid);
  }
  async getItemOnly(collectionName: string, itemUuid: string) {
    return this.callApi(getItemOnly, collectionName, itemUuid);
  }

  async countItemByValue(
    collectionName: string,
    fieldName: string,
    fieldValue: any
  ) {
    return this.callApi(
      countItemByValue,
      collectionName,
      fieldName,
      fieldValue
    );
  }
  async saveCSVData(collectionName: string, items: any[]) {
    return this.callApi(saveCSVData, collectionName, items);
  }
  async validateItem(collectionName: string, item: any) {
    return this.callApi(validateItem, collectionName, item);
  }
  async lastItem(collectionName: string) {
    return this.callApi(lastItem, collectionName);
  }
  async updateItemWithUuid(
    collectionName: string,
    itemUuid: string,
    body: any
  ) {
    return this.callApi(updateItemWithUuid, collectionName, itemUuid, body);
  }
  async clearItem(collectionName: string) {
    return this.callApi(clearItem, collectionName);
  }
  async deleteFieldItem(collectionName: string, fieldName: string) {
    return this.callApi(deleteFieldItem, collectionName, fieldName);
  }
  async deleteItemWithUuid(collectionName: string, itemUuid: string) {
    return this.callApi(deleteItemWithUuid, collectionName, itemUuid);
  }
  async bulkDeleteItems(collectionName: string, body: any) {
    return this.callApi(bulkDeleteItems, collectionName, body);
  }
  async removeReferenceItem(collectionName: string, body: any) {
    return this.callApi(removeReferenceItem, collectionName, body);
  }
  async addReferenceItem(collectionName: string, body: any) {
    return this.callApi(addReferenceItem, collectionName, body);
  }
  async getItemsByids(collectionName: string, body: any) {
    return this.callApi(getItemsByids, collectionName, body);
  }
  async sendEmail(templateId: string, sendTo: string) {
    return this.callApi(sendEmail, templateId, sendTo);
  }
}
export * from "./utils/index";
export * from "./utils/crypt";
export * from "./utils/constants";
