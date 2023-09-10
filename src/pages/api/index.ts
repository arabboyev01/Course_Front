import { getCookie } from '@/utils/setCookie'
import { VerifyToken } from '@/utils'
import { usersType } from '@/globalTypes'

export class ApiService {
    baseUrl: string

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl
    }

    async getUsers(endpoint: string): Promise<any> {
        try {
            const response = await fetch(`${this.baseUrl}/${endpoint}`, {
                method: 'GET'
            });

            return await response.json();
        } catch (error) {
            console.error('API Error:', error);
        }
    }

    async ThirdPartAPI(endpoint: string): Promise<any> {
        try {
            const response = await fetch(`${this.baseUrl}/${endpoint}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            return response.json();
        } catch (err) {

        }
    }

    async SingleUser(endpoint: string): Promise<any> {
        try {
            const response = await fetch(`${this.baseUrl}/${endpoint}`, {
                method: 'GET',
                headers: {
                    'Authorization': `${getCookie('authToken')}`
                }
            });
            return response.json();
        } catch (err) {
            throw err
        }
    }

    async UpdateUser(endpoint: string, payload: usersType, user: usersType | null): Promise<any> {
        const params = {
            username: payload.username || user?.username,
            firstName: payload.firstName || user?.firstName,
            lastName: payload.lastName || user?.lastName,
            email: payload.email || user?.email,
            password: payload.hashPassword || user?.hashPassword
        }
        try {
            const response = await fetch(`${this.baseUrl}/${endpoint}`, {
                method: 'POST',
                headers: {
                    'Authorization': `${getCookie('authToken')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(params),
            });
            return response.json();
        } catch (err) {

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

    async Review(endpoint: string, payload: object | any, image: any, tags: string[] | null, groupName: string): Promise<any> {

        try {
            const token = getCookie('authToken')
            const decoded: any = VerifyToken(token)
            const formData: any = new FormData();
            const tagsString = JSON.stringify(tags);
            formData.append('name', payload.name);
            formData.append('groupName', groupName);
            formData.append('reviewText', payload.reviewText);
            formData.append('image', image);
            formData.append('userId', decoded.userId);
            formData.append('tags', tagsString)

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
     async PostAuth(endpoint: string, payload: object): Promise<any> {
        try {
            const response = await fetch(`${this.baseUrl}/${endpoint}`, {
                method: 'POST',
                headers: {
                    'Authorization': `${getCookie('authToken')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload),
            });

            return await response.json();
        } catch (err) {
            console.log(err)
        }
    }

}
