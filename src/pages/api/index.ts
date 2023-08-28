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

    async Users(endpoint: string, payload: object): Promise<any> {
        try {
            const response = await fetch(`${this.baseUrl}/${endpoint}`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(payload),
            });

            return await response.json();
        } catch (err) {
            console.log(err)
        }
    }
}
