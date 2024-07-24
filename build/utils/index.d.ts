export declare enum MethodTypes {
    POST = "post",
    GET = "get",
    PATCH = "patch",
    PUT = "put",
    DELETE = "delete"
}
export type APIData = {
    method: MethodTypes;
    url: string;
    headers: any;
    body: object;
};
export declare const makeAPICall: (apiData: APIData) => Promise<{
    status: number;
    error: null;
    headers: Headers;
    data: any;
    message?: undefined;
} | {
    status: number;
    error: any;
    message: any;
    headers?: undefined;
    data?: undefined;
}>;
