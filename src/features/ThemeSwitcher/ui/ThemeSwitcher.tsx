import React, { FC, memo, useCallback } from 'react';

import { saveJsonSettings } from '@/entitis/User';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import GreenIcon from '@/shared/assets/icons/theme-green.svg';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import { Theme } from '@/shared/const/theme';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Button, ButtonTheme } from '@/shared/ui/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(
    ({ className }: ThemeSwitcherProps) => {
        const { theme, toggleTheme } = useTheme();
        const dispatch = useAppDispatch();

        const onTogglehandler = useCallback(() => {
            toggleTheme((newTheme) => {
                dispatch(saveJsonSettings({ theme: newTheme }));
            });
        }, [dispatch, toggleTheme]);

        return (
            <Button
                className={classNames('', {}, [className])}
                onClick={onTogglehandler}
                theme={ButtonTheme.CLEAR}
            >
                {
                    // eslint-disable-next-line no-nested-ternary
                    theme === Theme.LIGHT ? (
                        <LightIcon />
                    ) : theme === Theme.DARK ? (
                        <DarkIcon />
                    ) : (
                        <GreenIcon />
                    )
                }
            </Button>
        );
    },
);
