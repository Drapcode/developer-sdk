export enum QueryOperation {
  EQUALS = "EQUALS",
  IS_NOT_NULL = "IS_NOT_NULL",
  IS_NULL = "IS_NULL",
  LIKE = "LIKE",
  LESS_THAN_EQUALS_TO = "LESS_THAN_EQUALS_TO",
  GREATER_THAN_EQUALS_TO = "GREATER_THAN_EQUALS_TO",
  LESS_THAN = "LESS_THAN",
  GREATER_THAN = "GREATER_THAN",
  IN_LIST = "IN_LIST",
  NOT_IN_LIST = "NOT_IN_LIST",
}

export type Query = {
  field: string;
  condition: QueryOperation;
  value: string;
};
export type SearchPaginate = {
  sortField?: string;
  sortOrder?: string;
  searchTerm?: string | any;
  isPagination?: boolean;
  page?: number | string | any;
  limit?: number | string | any;
  includeFields?:string | any;
  excludeFields?:string | any;
};
