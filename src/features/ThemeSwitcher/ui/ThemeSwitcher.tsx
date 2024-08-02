import React, { FC, memo, useCallback } from 'react';

import { saveJsonSettings } from '@/entitis/User';
import ThemeIcon from '@/shared/assets/icons/theme-dark.svg';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';

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
                <Icon isInverted width={40} height={40} Svg={ThemeIcon} />
            </Button>
        );
    },
);
