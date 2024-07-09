import React, { FC, memo } from 'react';

import { Link, LinkProps } from 'react-router-dom';

import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';

import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    children?: React.ReactNode
}

const AppLink: FC<AppLinkProps> = memo((props: AppLinkProps) => {

    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );

});

export default AppLink;
