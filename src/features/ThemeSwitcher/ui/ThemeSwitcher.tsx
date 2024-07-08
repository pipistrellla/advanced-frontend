import React, { FC, memo } from 'react';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import LighIcon from '@/shared/assets/icons/theme-light.svg';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import GreenIcon from '@/shared/assets/icons/theme-green.svg';
import { Button } from '@/shared/ui/Button';
import { ButtonTheme } from '@/shared/ui/Button/ui/Button';
import { Theme } from '@/shared/const/theme';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

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

            {
                // eslint-disable-next-line no-nested-ternary
                theme === Theme.LIGHT ? <LighIcon /> : theme === Theme.DARK ? <DarkIcon /> : <GreenIcon />
            }
        </Button>

    );

});
