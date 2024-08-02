import React, { FC } from 'react';

import cls from './Loader.module.scss';

interface LoaderProps {
    className?: string;
}
/**
 * компонент устарел
 * @deprecated
 */
export const Loader: FC<LoaderProps> = ({ className }) => (
    <div className={cls.loader} />
);
