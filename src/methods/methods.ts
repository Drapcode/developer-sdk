import axios from 'axios';

export const getAllItems = async (
    baseUrl: string,
    xApiKey: string,
    authorisation: string,
    collectionName: string
): Promise<any[]> => {
    try {
        const url = `${baseUrl}/collection/${collectionName}/items`;
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
    baseUrl: string,
    xApiKey: string,
    authorisation: string,
    collectionName: string,
    body: any
): Promise<any[]> => {
    try {
        const url = `${baseUrl}/collection/${collectionName}/items`;
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




