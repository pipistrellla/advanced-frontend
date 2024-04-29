import React, { FC } from 'react';
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import cls from './Loader.module.scss';

interface LoaderProps {
    className?: string;
}

export const Loader: FC<LoaderProps> = ({ className }) => (
    <div className={cls.loader} />
);
