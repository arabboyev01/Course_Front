import { useRouter } from 'next/router'

export const Router = () => {
    const router = useRouter()
    const handleRoute = (path: string) => router.push(path)

    return {
        router,
        handleRoute
    }
}
