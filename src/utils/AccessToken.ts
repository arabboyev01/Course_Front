import { api } from '@/config'

export const AccessToken = (codeParams: string | any) => {
    const accessToken = typeof window !== 'undefined' ? window.localStorage.getItem('accessToken') : null


    if (codeParams && accessToken === null) {
        api.getUsers(`getAccessToken?code=${codeParams}`)
            .then((res) => {
                if (res.access_token) {
                    window.localStorage.setItem('accessToken', res.access_token);
                    window.location.href = '/login'
                }
            })
            .catch((err) => console.log(err));
    }
}