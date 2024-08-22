import React, { FC, memo } from 'react';

import { ScrollToTopButton } from '@/features/scrollToTopButton';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { VStack } from '@/shared/ui/Stack';

import cls from './ScrollToolbar.module.scss';

interface ScrollToolbarProps {
    className?: string;
}

export const ScrollToolbar: FC<ScrollToolbarProps> = memo((props) => {
    const { className } = props;

    return (
        <VStack
            justify="center"
            align="center"
            max
            className={classNames(cls.scrollToolbar, {}, [className])}
        >
            <ScrollToTopButton />
        </VStack>
    );
});
