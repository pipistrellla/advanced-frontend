import React, {
    FC, MutableRefObject, useRef, UIEvent,
} from 'react';
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ScrollPositionSaveActions, getScrollPositionByPath } from 'features/ScrollPositionSave';
import { useLocation } from 'react-router-dom';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { useThrottle } from 'shared/lib/hooks/useTrottle/useTrottle';
import cls from './Page.module.scss';

interface PageProps {
    className?: string;
    children: React.ReactNode
    onScrollEnd?: () => void
}

export const Page: FC<PageProps> = (props) => {

    const {
        className,
        children,
        onScrollEnd,
    } = props;
    const { pathname } = useLocation();
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispathch = useAppDispatch();
    const scrollPosition = useSelector((state: StateSchema) => getScrollPositionByPath(state, pathname));

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    const onScrollHandler = useThrottle((e: UIEvent<HTMLDivElement>) => {

        dispathch(ScrollPositionSaveActions.setScrollPosition({
            position: e.currentTarget.scrollTop,
            path: pathname,
        }));

    }, 500);

    useInitialEffect(() => {

        wrapperRef.current.scrollTop = scrollPosition;

    });

    return (
        <section
            ref={wrapperRef}
            className={classNames(cls.page, {}, [className])}
            onScroll={onScrollHandler}
        >
            {children}
            { onScrollEnd
                ? <div className={cls.trigger} ref={triggerRef} />
                : null}
        </section>
    );

};