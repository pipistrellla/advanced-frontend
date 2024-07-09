import { createContext } from 'react';

import { Theme } from '../../../const/theme';

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

// контекст для темы
export const ThemeContext = createContext<ThemeContextProps>({});
