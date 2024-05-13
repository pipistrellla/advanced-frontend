import React, { FC, HTMLAttributes } from 'react';
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import cls from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement>{
    className?: string;
    children?: React.ReactNode
}

export const Card: FC<CardProps> = (props) => {

    const {
        className,
        children,
        ...otherProps
    } = props;

    return (
        <div
            className={classNames(cls.card, {}, [className])}
            {...otherProps}
        >
            {children}
        </div>
    );

};
