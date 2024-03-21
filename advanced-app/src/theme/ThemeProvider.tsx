import React, { FC, useState, useMemo } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface ThemeProviderProps {
    
}

const defaultTheme:Theme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

const ThemeProvider: FC<ThemeProviderProps> = ({children}) => {
        
    const [theme, setTheme] = useState<Theme>(defaultTheme)



    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme 
    }), [theme])

    return (
        <ThemeContext.Provider value = {defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;