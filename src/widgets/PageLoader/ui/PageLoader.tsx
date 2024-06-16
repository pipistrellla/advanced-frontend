import React, { FC } from 'react';
import { Loader } from '@/shared/ui/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {

}

export const PageLoader: FC<PageLoaderProps> = () => (
    <div className={cls.PageLoader}>
        <Loader />
    </div>
);
