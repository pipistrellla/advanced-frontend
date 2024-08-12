import React, { FC, memo, useCallback } from 'react';

import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';

import cls from './Tabs.module.scss';
import { Flex, FlexDirection } from '../../../Stack/Flex/Flex';
import { Card } from '../../Card';
import { Text } from '../../Text';

export interface TabItem {
    value: string;
    content: React.ReactNode;
}

interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
    direction?: FlexDirection;
}

export const Tabs: FC<TabsProps> = memo((props: TabsProps) => {
    const { className, onTabClick, tabs, value, direction = 'column' } = props;

    const clickHandle = useCallback(
        (tab: TabItem) => () => {
            onTabClick(tab);
        },
        [onTabClick],
    );
    return (
        <Flex
            gap="8"
            direction={direction}
            className={classNames(cls.tabs, {}, [className])}
            align="start"
        >
            {tabs.map((tab) => {
                const isSelected = tab.value === value;
                return (
                    <Card
                        variant={isSelected ? 'light' : 'normal'}
                        key={tab.value}
                        className={classNames(
                            cls.tab,
                            { [cls.selected]: isSelected },
                            [],
                        )}
                        onClick={clickHandle(tab)}
                        border="round"
                    >
                        {typeof tab.content === 'string' ? (
                            <Text text={tab.content} />
                        ) : (
                            tab.content
                        )}
                    </Card>
                );
            })}
        </Flex>
    );
});
