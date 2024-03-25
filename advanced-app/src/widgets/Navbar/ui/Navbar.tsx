import React, { FC } from 'react';
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import cls from './Navbar.module.scss';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

interface NavbarProps {
    className?: string;

}

export const Navbar: FC<NavbarProps> = ({className}) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <ThemeSwitcher/>
            <div className={cls.links}>
                <AppLink 
                    to={'/'}
                    theme={AppLinkTheme.SECONDARY}
                >
                    Главная
                </AppLink>

                <AppLink 
                    to={'/about'}
                    theme={AppLinkTheme.SECONDARY}
                >
                    О Нас
                </AppLink>
            </div>

        </div>
    )
}

