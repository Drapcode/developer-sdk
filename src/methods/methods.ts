import axios from 'axios';

export const getAllItems = async (
    project_seo_name: string,
    xApiKey: string,
    authorisation: string,
    collectionName: string
): Promise<any[]> => {
    try {
        const url = `http://${project_seo_name}.api.prodelessdev.com:6002/api/v1/developer/collection/${collectionName}/items`;
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
    body: any
): Promise<any[]> => {
    try {
        const url = `http://${project_seo_name}.api.prodelessdev.com:6002/api/v1/developer/collection/${collectionName}/items`;
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
    filterUuid: string
): Promise<any[]> => {
    try {
        const url = `http://${project_seo_name}.api.prodelessdev.com:6002/api/v1/developer/collection/${collectionName}/filter/${filterUuid}/items`;
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
    filterUuid: string
): Promise<any[]> => {
    try {
        const url = `http://${project_seo_name}.api.prodelessdev.com:6002/api/v1/developer/collection/${collectionName}/filter/${filterUuid}/`;
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
    itemUuid: string
): Promise<any[]> => {
    try {
        const url = `http://${project_seo_name}.api.prodelessdev.com:6002/api/v1/developer/collection/${collectionName}/item/${itemUuid}`;
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
    body: any
): Promise<any[]> => {
    try {
        const url = `http://${project_seo_name}.api.prodelessdev.com:6002/api/v1/developer/collection/${collectionName}/item/${itemUuid}`;
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
    itemUuid: string
): Promise<any[]> => {
    try {
        const url = `http://${project_seo_name}.api.prodelessdev.com:6002/api/v1/developer/collection/${collectionName}/item/${itemUuid}`;
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
    body: any
): Promise<any[]> => {
    try {
        const url = `http://${project_seo_name}.api.prodelessdev.com:6002/api/v1/developer/collection/${collectionName}/bulkDelete`;
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
    body: any
): Promise<any[]> => {
    try {
        const url = `http://${project_seo_name}.api.prodelessdev.com:6002/api/v1/developer/collection/${collectionName}/itemsbyids`;
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