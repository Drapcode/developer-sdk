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
