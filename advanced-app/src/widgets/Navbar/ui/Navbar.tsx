import React, { FC } from 'react';
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;

}

export const Navbar: FC<NavbarProps> = ({ className }) => (
    <div className={classNames(cls.navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink
                to="/"
                theme={AppLinkTheme.SECONDARY}
            >
                Главная
            </AppLink>

            <AppLink
                to="/about"
                theme={AppLinkTheme.SECONDARY}
            >
                О Нас
            </AppLink>
        </div>

    </div>
);
