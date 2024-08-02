import React, { FC, memo } from 'react';

import { LinkProps, NavLink } from 'react-router-dom';

import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';

import cls from './AppLink.module.scss';

export type AppLinkVariant = 'primary' | 'red';

interface AppLinkProps extends LinkProps {
    className?: string;
    variant?: AppLinkVariant;
    children?: React.ReactNode;
    activeClassName?: string;
}

const AppLink: FC<AppLinkProps> = memo((props: AppLinkProps) => {
    const {
        to,
        className,
        children,
        variant = 'primary',
        activeClassName = '',
        ...otherProps
    } = props;

    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                classNames(cls.AppLink, { [activeClassName]: isActive }, [
                    className,
                    cls[variant],
                ])
            }
            {...otherProps}
        >
            {children}
        </NavLink>
    );
});

export default AppLink;
