import axios from 'axios';

const getBaseUrl = (environment: string, project_seo_name: string): string => {
    switch (environment.toUpperCase()) {
        case 'PRODUCTION':
            return `http://${project_seo_name}.api.prodelessdev.com:6002/api/v1/developer`;
        case 'PREVIEW':
            return `http://${project_seo_name}.api.preview.prodelessdev.com:6002/api/v1/developer`;
        case 'BETA':
            return `http://${project_seo_name}.api.beta.prodelessdev.com:6002/api/v1/developer`;
        case 'ALPHA':
            return `http://${project_seo_name}.api.alpha.prodelessdev.com:6002/api/v1/developer`;
        default:
            return `http://${project_seo_name}.api.prodelessdev.com:6002/api/v1/developer`;
    }
}


export const getAllItems = async (
    project_seo_name: string,
    xApiKey: string,
    authorisation: string,
    collectionName: string,
    environment: string
): Promise<any[]> => {
    try {
        const baseurl = getBaseUrl(project_seo_name, environment)
        const url = `${baseurl}/collection/${collectionName}/items`;
        const response = await axios.get<any[]>(url, {
            headers: {
                'x-api-key': xApiKey,
                'Authorization': authorisation,
            },
        });
        return response.data;
    } catch (error: any) {
        console.error('Error fetching collection:', error.message);
        throw error;
    }
};

export const createItem = async (
    project_seo_name: string,
    xApiKey: string,
    authorisation: string,
    collectionName: string,
    body: any,
    environment: string
): Promise<any[]> => {
    try {
        const baseurl = getBaseUrl(project_seo_name, environment)
        const url = `${baseurl}/collection/${collectionName}/items`;
        const response = await axios.post<any[]>(url, body, {
            headers: {
                'x-api-key': xApiKey,
                'Authorization': authorisation,
            },
        });
        return response.data;
    } catch (error: any) {
        console.error('Error fetching collection:', error.message);
        throw error;
    }
};



export const getItemsWithFilter = async (
    project_seo_name: string,
    xApiKey: string,
    authorisation: string,
    collectionName: string,
    filterUuid: string,
    environment: string
): Promise<any[]> => {
    try {
        const baseurl = getBaseUrl(project_seo_name, environment)
        const url = `${baseurl}/collection/${collectionName}/filter/${filterUuid}/items`;
        const response = await axios.get<any[]>(url, {
            headers: {
                'x-api-key': xApiKey,
                'Authorization': authorisation,
            },
        });
        return response.data;
    } catch (error: any) {
        console.error('Error fetching collection:', error.message);
        throw error;
    }
};

export const getItemsCountWithFilter = async (
    project_seo_name: string,
    xApiKey: string,
    authorisation: string,
    collectionName: string,
    filterUuid: string,
    environment: string
): Promise<any[]> => {
    try {
        const baseurl = getBaseUrl(project_seo_name, environment)
        const url = `${baseurl}/collection/${collectionName}/filter/${filterUuid}/`;
        const response = await axios.get<any[]>(url, {
            headers: {
                'x-api-key': xApiKey,
                'Authorization': authorisation,
            },
        });
        return response.data;
    } catch (error: any) {
        console.error('Error fetching collection:', error.message);
        throw error;
    }
};

export const getItemWithUuid = async (
    project_seo_name: string,
    xApiKey: string,
    authorisation: string,
    collectionName: string,
    itemUuid: string,
    environment: string
): Promise<any[]> => {
    try {
        const baseurl = getBaseUrl(project_seo_name, environment)
        const url = `${baseurl}/collection/${collectionName}/item/${itemUuid}`;
        const response = await axios.get<any[]>(url, {
            headers: {
                'x-api-key': xApiKey,
                'Authorization': authorisation,
            },
        });
        return response.data;
    } catch (error: any) {
        console.error('Error fetching collection:', error.message);
        throw error;
    }
};

export const updateItemWithUuid = async (
    project_seo_name: string,
    xApiKey: string,
    authorisation: string,
    collectionName: string,
    itemUuid: string,
    body: any,
    environment: string
): Promise<any[]> => {
    try {
        const baseurl = getBaseUrl(project_seo_name, environment)
        const url = `${baseurl}/collection/${collectionName}/item/${itemUuid}`;
        const response = await axios.put<any[]>(url, body, {
            headers: {
                'x-api-key': xApiKey,
                'Authorization': authorisation,
            },
        });
        return response.data;
    } catch (error: any) {
        console.error('Error fetching collection:', error.message);
        throw error;
    }
};

export const deleteItemWithUuid = async (
    project_seo_name: string,
    xApiKey: string,
    authorisation: string,
    collectionName: string,
    itemUuid: string,
    environment: string
): Promise<any[]> => {
    try {
        const baseurl = getBaseUrl(project_seo_name, environment)
        const url = `${baseurl}/collection/${collectionName}/item/${itemUuid}`;
        const response = await axios.delete<any[]>(url, {
            headers: {
                'x-api-key': xApiKey,
                'Authorization': authorisation,
            },
        });
        return response.data;
    } catch (error: any) {
        console.error('Error fetching collection:', error.message);
        throw error;
    }
};

export const bulkDeleteItems = async (
    project_seo_name: string,
    xApiKey: string,
    authorisation: string,
    collectionName: string,
    body: any,
    environment: string
): Promise<any[]> => {
    try {
        const baseurl = getBaseUrl(project_seo_name, environment)
        const url = `${baseurl}/collection/${collectionName}/bulkDelete`;
        const response = await axios.post<any[]>(url, body, {
            headers: {
                'x-api-key': xApiKey,
                'Authorization': authorisation,
            },
        });
        return response.data;
    } catch (error: any) {
        console.error('Error fetching collection:', error.message);
        throw error;
    }
};

export const getItemsByids = async (
    project_seo_name: string,
    xApiKey: string,
    authorisation: string,
    collectionName: string,
    body: any,
    environment: string
): Promise<any[]> => {
    try {
        const baseurl = getBaseUrl(project_seo_name, environment)
        const url = `${baseurl}/collection/${collectionName}/itemsbyids`;
        const response = await axios.post<any[]>(url, body, {
            headers: {
                'x-api-key': xApiKey,
                'Authorization': authorisation,
            },
        });
        return response.data;
    } catch (error: any) {
        console.error('Error fetching collection:', error.message);
        throw error;
    }
};
export const sendEmail = async (
    project_seo_name: string,
    xApiKey: string,
    authorisation: string,
    templateId: string,
    sendTo: any,
    environment: string
): Promise<any[]> => {
    try {
        const baseurl = getBaseUrl(project_seo_name, environment)
        const url = `${baseurl}/sendEmail/${templateId}/user/${sendTo}`;
        const response = await axios.post<any[]>(url, "", {
            headers: {
                'x-api-key': xApiKey,
                'Authorization': authorisation,
            },
        });
        return response.data;
    } catch (error: any) {
        console.error('Error fetching collection:', error.message);
        throw error;
    }
};