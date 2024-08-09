import React, { FC, MutableRefObject, useRef, UIEvent } from 'react';

import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { StateSchema } from '@/app/providers/StoreProvider';
import {
    ScrollPositionSaveActions,
    getScrollPositionByPath,
} from '@/features/ScrollPositionSave';
import { toggleFeatures } from '@/shared/lib/features';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from '@/shared/lib/hooks/useTrottle/useTrottle';
import { TestProps } from '@/shared/types/tests';

import cls from './Page.module.scss';

interface PageProps extends TestProps {
    className?: string;
    children: React.ReactNode;
    onScrollEnd?: () => void;
}

export const Page: FC<PageProps> = (props) => {
    const { className, children, onScrollEnd } = props;
    const { pathname } = useLocation();
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const scrollPosition = useSelector((state: StateSchema) =>
        getScrollPositionByPath(state, pathname),
    );

    useInfiniteScroll({
        triggerRef,
        wrapperRef: toggleFeatures({
            name: 'isAppRedesigned',
            off: () => wrapperRef,
            on: () => undefined,
        }),
        callback: onScrollEnd,
    });

    const onScrollHandler = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(
            ScrollPositionSaveActions.setScrollPosition({
                position: e.currentTarget.scrollTop,
                path: pathname,
            }),
        );
    }, 500);

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    return (
        <main
            ref={wrapperRef}
            className={classNames(
                toggleFeatures({
                    name: 'isAppRedesigned',
                    off: () => cls.page,
                    on: () => cls.pageRedesigned,
                }),
                {},
                [className],
            )}
            onScroll={onScrollHandler}
            data-testid={props['data-testid'] ?? 'Page'}
        >
            {children}
            {onScrollEnd ? (
                <div className={cls.trigger} ref={triggerRef} />
            ) : null}
        </main>
    );
};
