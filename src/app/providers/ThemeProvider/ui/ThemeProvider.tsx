import React, { FC, useState, useMemo } from 'react';

import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage';
import { Theme } from '@/shared/const/theme';

import { ThemeContext } from '../../../../shared/lib/context/ThemeContext/ThemeContext';

const defaultTheme:Theme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
    initialTheme?: Theme;
    children: React.ReactNode
}

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {

    const {
        initialTheme,
        children,
    } = props;

    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );

};
