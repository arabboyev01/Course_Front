import { getCookie } from '@/utils/setCookie'

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

    async Review(endpoint: string, payload: object | any, image: any, grade: number, tags: string[] | null): Promise<any> {

        try {
            const userId = 1
            const formData: any = new FormData();
            const tagsString = JSON.stringify(tags);
            formData.append('name', payload.name);
            formData.append('groupName', payload.groupName);
            formData.append('reviewText', payload.reviewText);
            formData.append('image', image);
            formData.append('grade', grade);
            formData.append('userId', userId);
            formData.append('tags', tagsString)
            const token = getCookie('authToken')
            const headers = new Headers();
            headers.append('Authorization', `${token}`);

            const response = await fetch(`${this.baseUrl}/${endpoint}`, {
                method: 'POST',
                body: formData,
                headers: headers
            });
            return await response.json();
        } catch (err) {
            throw err
        }
    }
}
