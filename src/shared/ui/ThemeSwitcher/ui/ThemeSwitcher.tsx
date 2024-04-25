import React, { FC, memo } from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import LighIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(({ className }: ThemeSwitcherProps) => {

    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            className={classNames('', {}, [className])}
            onClick={() => toggleTheme()}
            theme={ButtonTheme.CLEAR}
        >
            {theme === Theme.LIGHT ? <LighIcon /> : <DarkIcon />}
        </Button>

    );

});
