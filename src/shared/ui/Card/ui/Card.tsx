import React, { FC, HTMLAttributes } from 'react';
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import cls from './Card.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined'
}

interface CardProps extends HTMLAttributes<HTMLDivElement>{
    className?: string;
    children?: React.ReactNode
    theme?: CardTheme;
}

export const Card: FC<CardProps> = (props) => {

    const {
        className,
        children,
        theme = CardTheme.NORMAL,
        ...otherProps
    } = props;

    return (
        <div
            className={classNames(cls.card, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </div>
    );

};
