import React, { FC, memo } from 'react';

import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import GreenIcon from '@/shared/assets/icons/theme-green.svg';
import LighIcon from '@/shared/assets/icons/theme-light.svg';
import { Theme } from '@/shared/const/theme';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Button, ButtonTheme } from '@/shared/ui/Button';

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
