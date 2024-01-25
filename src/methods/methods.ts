import axios from 'axios';

const createErrorResponse = (error: any) => {
    if (error.response && error.response.status === 404) {
        const responseData = error.response.data
        let finalData;
        if (responseData == 'This url does not exist. Please publish again.') {
            finalData = "Please check your project name or publish again."
        } else if (responseData.message) {
            finalData = responseData.message
        } else {
            finalData = responseData
        }
        return {
            code: error.response.status,
            success: false,
            data: finalData,
            error: '',
            message: '',
        };
    } else if (error.response && error.response.status === 401) {
        const responseData = error.response
        return {
            code: responseData.status,
            success: false,
            data: responseData.data.message,
            error: '',
            message: '',
        }
    }
    return {
        code: error.response.code,
        success: false,
        data: "",
        error: 'Please check your project name or publish again.',
        message: '',
    };
};


export const getAllItems = async (
    baseurl: string,
    headers: Record<string, string>,
    collectionName: string,
): Promise<any> => {
    try {
        const url = `${baseurl}/collection/${collectionName}/items`;
        const response = await axios.get<any>(url, { headers });
        if (response.data && response.data.code === 404) {
            return { success: false, data: response.data.data, error: '', message: '' };
        }
        return { success: true, data: response.data, error: '', message: '' };
    } catch (error: any) {
        return createErrorResponse(error)
    }
};

export const createItem = async (
    baseurl: string,
    headers: Record<string, string>,
    collectionName: string,
    body: any,
): Promise<any> => {
    try {
        const url = `${baseurl}/collection/${collectionName}/items`;
        const response = await axios.post<any>(url, body, {
            headers
        });
        console.log("response.data with create", response.data)
        if (response.data && response.data.code === 404) {
            return { success: false, data: response.data.data, error: '', message: '' };
        }
        return { success: true, data: response.data, error: '', message: '' };
    } catch (error: any) {
        return createErrorResponse(error)
    }
};



export const getItemsWithFilter = async (
    baseurl: string,
    headers: Record<string, string>,
    collectionName: string,
    filterUuid: string,
): Promise<any> => {
    try {
        const url = `${baseurl}/collection/${collectionName}/filter/${filterUuid}/items`;
        const response = await axios.get<any>(url, {
            headers
        });
        console.log("response", response.data)
        return { success: true, data: response.data, error: '', message: '' };
    } catch (error: any) {
        console.log("errrr", error)
        return createErrorResponse(error)
    }
};

export const getItemsCountWithFilter = async (
    baseurl: string,
    headers: Record<string, string>,
    collectionName: string,
    filterUuid: string,
): Promise<any> => {
    try {
        const url = `${baseurl}/collection/${collectionName}/filter/${filterUuid}/count`;
        const response = await axios.get<any[]>(url, {
            headers
        });
        return { success: true, data: response.data, error: '', message: '' };
    } catch (error: any) {
        return createErrorResponse(error)
    }
};

export const getItemWithUuid = async (
    baseurl: string,
    headers: Record<string, string>,
    collectionName: string,
    itemUuid: string,
): Promise<any> => {
    try {
        const url = `${baseurl}/collection/${collectionName}/item/${itemUuid}`;
        const response = await axios.get<any[]>(url, {
            headers
        });
        return { success: true, data: response.data, error: '', message: '' };
    } catch (error: any) {
        return createErrorResponse(error)
    }
};

export const updateItemWithUuid = async (
    baseurl: string,
    headers: Record<string, string>,
    collectionName: string,
    itemUuid: string,
    body: any,
): Promise<any> => {
    try {
        const url = `${baseurl}/collection/${collectionName}/item/${itemUuid}`;
        const response = await axios.put<any>(url, body, {
            headers
        });
        return { success: true, data: response.data, error: '', message: '' };
    } catch (error: any) {
        return createErrorResponse(error)
    }
};

export const deleteItemWithUuid = async (
    baseurl: string,
    headers: Record<string, string>,
    collectionName: string,
    itemUuid: string,
): Promise<any> => {
    try {
        const url = `${baseurl}/collection/${collectionName}/item/${itemUuid}`;
        const response = await axios.delete<any>(url, {
            headers
        });
        return { success: true, data: response.data, error: '', message: '' };
    } catch (error: any) {
        return createErrorResponse(error)
    }
};

export const bulkDeleteItems = async (
    baseurl: string,
    headers: Record<string, string>,
    collectionName: string,
    body: any,
): Promise<any> => {
    try {
        const url = `${baseurl}/collection/${collectionName}/bulkDelete`;
        const response = await axios.post<any>(url, body, {
            headers
        });
        return { success: true, data: response.data, error: '', message: '' };
    } catch (error: any) {
        return createErrorResponse(error)
    }
};

export const getItemsByids = async (
    baseurl: string,
    headers: Record<string, string>,
    collectionName: string,
    body: any,
): Promise<any> => {
    try {
        const url = `${baseurl}/collection/${collectionName}/itemsbyids`;
        const response = await axios.post<any>(url, body, {
            headers
        });
        return { success: true, data: response.data, error: '', message: '' };
    } catch (error: any) {
        return createErrorResponse(error)
    }
};
export const sendEmail = async (
    baseurl: string,
    headers: Record<string, string>,
    templateId: string,
    sendTo: any,
): Promise<any> => {
    try {
        const url = `${baseurl}/sendEmail/${templateId}/user/${sendTo}`;
        const response = await axios.post<any[]>(url, "", {
            headers
        });
        return { success: true, data: response.data, error: '', message: '' }
    } catch (error: any) {
        return createErrorResponse(error)
    }
};

/**
 * {
 * code,
 * success
 * data,
 * error,
 * message,
 * }
 */