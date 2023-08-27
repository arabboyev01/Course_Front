export class ApiService {
    baseUrl: string

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl
    }

    async getUsers(endpoint: string): Promise<any> {
        try {
            const response = await fetch(`${this.baseUrl}/${endpoint}`);

            return await response.json();
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    }
}
