import React, { FC, useState, useMemo, useEffect } from 'react';

import { useJsonSettings } from '@/entitis/User';
import { Theme } from '@/shared/const/theme';

import { ThemeContext } from '../../../../shared/lib/context/ThemeContext/ThemeContext';

interface ThemeProviderProps {
    initialTheme?: Theme;
    children: React.ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const { theme: defaultTheme = Theme.LIGHT } = useJsonSettings();
    const { initialTheme, children } = props;

    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    useEffect(() => {
        setTheme(defaultTheme);
    }, [defaultTheme]);

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
