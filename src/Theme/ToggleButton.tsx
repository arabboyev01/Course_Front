import { useDarkMode } from './useDarkMode'
import Toggle from '@/Theme/Toggle'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { toggleMode } from "@/store/reducerSlice"

const ToggleButton = () => {

    const dispatch = useDispatch();
    const storage = typeof window !== "undefined" ?window.localStorage.getItem('mode') : null
    const initial: string = storage === null ? "light": storage
    const [theme, toggleTheme] = useDarkMode(initial);

    useEffect(() => {
        window.localStorage.setItem('mode', theme);
        dispatch(toggleMode(theme))
    }, [dispatch, theme, storage])

    return (
        <Toggle onToggle={toggleTheme}>Toggle theme</Toggle>
    )

}

export default ToggleButton