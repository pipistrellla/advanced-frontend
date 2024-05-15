import React, { FC, MutableRefObject, useRef } from 'react';
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
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

    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    return (
        <section
            ref={wrapperRef}
            className={classNames(cls.page, {}, [className])}
        >
            {children}
            <div ref={triggerRef} />
        </section>
    );

};
