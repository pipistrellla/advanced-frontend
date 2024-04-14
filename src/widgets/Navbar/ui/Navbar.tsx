import React, { FC } from 'react';
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;

}

export const Navbar: FC<NavbarProps> = ({ className }) => {

    const { t } = useTranslation('navbar');

    return (

        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                /
            </div>

        </div>
    );

};
