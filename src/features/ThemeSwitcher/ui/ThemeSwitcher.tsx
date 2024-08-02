import React, { FC, memo, useCallback } from 'react';

import { saveJsonSettings } from '@/entitis/User';
import ThemeIconDeprecated from '@/shared/assets/icons/theme-dark.svg';
import ThemeIcon from '@/shared/assets/icons/theme.svg';
import { ToggleFeaturesComponent } from '@/shared/lib/features';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Icon } from '@/shared/ui/redesigned/Icon';

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
            <ToggleFeaturesComponent
                feature="isAppRedesigned"
                off={
                    <ButtonDeprecated
                        className={classNames('', {}, [className])}
                        onClick={onTogglehandler}
                        theme={ButtonTheme.CLEAR}
                    >
                        <IconDeprecated
                            isInverted
                            width={40}
                            height={40}
                            Svg={ThemeIconDeprecated}
                        />
                    </ButtonDeprecated>
                }
                on={
                    <Icon Svg={ThemeIcon} clickable onClick={onTogglehandler} />
                }
            />
        );
    },
);
