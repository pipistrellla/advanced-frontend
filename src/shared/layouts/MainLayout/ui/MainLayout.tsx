import React, { FC, memo, ReactElement } from 'react';

import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';

import cls from './MainLayout.module.scss';

interface MainLayoutProps {
    className?: string;
    header: ReactElement;
    toolbar?: ReactElement;
    sidebar: ReactElement;
    content: ReactElement;
}

export const MainLayout: FC<MainLayoutProps> = memo(
    (props: MainLayoutProps) => {
        const { className, content, header, sidebar, toolbar } = props;

        return (
            <div className={classNames(cls.mainLayout, {}, [className])}>
                <div className={classNames(cls.sidebar, {}, [className])}>
                    {sidebar}
                </div>
                <div className={classNames(cls.content, {}, [className])}>
                    {content}
                </div>
                <div className={classNames(cls.rightbar, {}, [className])}>
                    <div className={classNames(cls.header, {}, [className])}>
                        {header}
                    </div>
                    <div className={classNames(cls.toolbar, {}, [className])}>
                        {toolbar}
                    </div>
                </div>
            </div>
        );
    },
);
