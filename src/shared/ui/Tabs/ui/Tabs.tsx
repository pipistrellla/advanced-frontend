import React, { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import { Card, CardTheme } from 'shared/ui/Card';
import cls from './Tabs.module.scss';

export interface TabItem {
    value: string;
    content: React.ReactNode
}

interface TabsProps {
    className?: string;
    tabs: TabItem[]
    value: string
    onTabClick: (tab: TabItem) => void
}

export const Tabs: FC<TabsProps> = memo((props:TabsProps) => {

    const {
        className,
        onTabClick,
        tabs,
        value,
    } = props;

    const clickHandle = useCallback((tab: TabItem) => () => {

        onTabClick(tab);

    }, [onTabClick]);
    return (
        <div className={classNames(cls.tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
                    key={tab.value}
                    className={cls.tab}
                    onClick={clickHandle(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );

});
