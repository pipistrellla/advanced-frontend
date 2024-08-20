import React, { FC, useState, useMemo, useEffect } from 'react';

import { useJsonSettings } from '@/entitis/User';
import { Theme } from '@/shared/const/theme';

import { ThemeContext } from '../../../../shared/lib/context/ThemeContext/ThemeContext';

interface ThemeProviderProps {
    initialTheme?: Theme;
    children: React.ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const { theme: defaultTheme } = useJsonSettings();
    const { initialTheme, children } = props;
    const [isThemeInited, setThemeInited] = useState(false);

    const [theme, setTheme] = useState<Theme>(
        initialTheme || defaultTheme || Theme.LIGHT,
    );

    useEffect(() => {
        if (!isThemeInited && defaultTheme) {
            setTheme(defaultTheme);
            setThemeInited(true);
        }
    }, [defaultTheme, isThemeInited]);

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
