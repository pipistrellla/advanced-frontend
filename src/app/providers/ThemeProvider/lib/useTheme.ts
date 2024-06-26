import { useContext } from 'react';
import { Theme, ThemeContext, LOCAL_STORAGE_THEME_KEY } from './ThemeContext';

interface useThemeResult {
    toggleTheme: () => void;
    theme: Theme
}

export function useTheme():useThemeResult {

    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = ():void => {

        let newTheme:Theme;
        switch (theme) {
        case Theme.DARK:
            newTheme = Theme.LIGHT;
            break;
        case Theme.LIGHT:
            newTheme = Theme.GREEN;
            break;
        case Theme.GREEN:
            newTheme = Theme.DARK;
            break;
        default:
            newTheme = Theme.DARK;
        }
        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);

    };

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme,
    };

}
