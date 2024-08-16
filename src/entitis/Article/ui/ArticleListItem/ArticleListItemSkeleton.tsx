import React, { FC, memo } from 'react';

import { toggleFeatures } from '@/shared/lib/features';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';

import cls from './ArticleListItem.module.scss';
import { ArticleView } from '../../model/consts/consts';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton: FC<ArticleListItemSkeletonProps> = memo(
    (props: ArticleListItemSkeletonProps) => {
        const { view, className } = props;

        const mainClass = toggleFeatures({
            on: () => cls.articleListItemRedesigned,
            off: () => cls.articleListItem,
            name: 'isAppRedesigned',
        });

        const Skeleton = toggleFeatures({
            on: () => SkeletonRedesigned,
            off: () => SkeletonDeprecated,
            name: 'isAppRedesigned',
        });
        const Card = toggleFeatures({
            on: () => CardRedesigned,
            off: () => CardDeprecated,
            name: 'isAppRedesigned',
        });

        if (view === ArticleView.BIG) {
            return (
                <div
                    className={classNames(mainClass, {}, [
                        className,
                        cls[view],
                    ])}
                >
                    <Card className={cls.card}>
                        <div className={cls.header}>
                            <Skeleton border="50%" height={30} width={30} />
                            <Skeleton
                                width={150}
                                height={16}
                                className={cls.username}
                            />
                            <Skeleton
                                width={150}
                                height={16}
                                className={cls.date}
                            />
                        </div>
                        <Skeleton
                            width={250}
                            height={24}
                            className={cls.title}
                        />
                        <Skeleton height={200} className={cls.img} />
                        <div className={cls.footer}>
                            <Skeleton height={36} width={200} />
                        </div>
                    </Card>
                </div>
            );
        }

        return (
            <div className={classNames(mainClass, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.imageWrapper}>
                        <Skeleton
                            width={200}
                            height={200}
                            className={cls.img}
                        />
                    </div>
                    <div className={cls.infoWrapper}>
                        <Skeleton width={130} height={16} />
                    </div>
                    <Skeleton width={150} height={16} className={cls.title} />
                </Card>
            </div>
        );
    },
);
