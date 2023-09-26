import { useEffect, useState } from 'react';

export const useDarkMode = (mode: string) => {
    const [theme, setTheme] = useState<any>(mode);
    const toggleTheme = () => {
        if (theme === 'light') setTheme('dark');
        else setTheme('light');
    };

    useEffect(() => {
        const localTheme = null;
        localTheme && setTheme(localTheme);
    }, []);

    return [theme, toggleTheme];
};