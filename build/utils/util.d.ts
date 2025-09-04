export declare const createErrorResponse: (error: any) => Promise<{
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
}>;
export declare const processFilterResponse: (response: any) => {
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
};
export declare const processCountFilterResponse: () => void;
export declare const processCreateItemResponse: (response: any) => {
    code: any;
    data: any;
    status: any;
    error: any;
    message: any;
} | undefined;
export declare const processCreateErrorResponse: (error: any) => Promise<any>;
export declare const processListResponse: () => void;
export declare const processResponse: (result: any) => {
    code: any;
    success: boolean;
    error: any;
    message: any;
    data: string;
    totalItems?: undefined;
    totalPages?: undefined;
} | {
    code: number;
    success: boolean;
    error: string;
    message: string;
    data: any;
    totalItems: any;
    totalPages: any;
};
