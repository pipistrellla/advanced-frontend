import React, { FC, memo } from 'react';

import { useTranslation } from 'react-i18next';

import { ArticleView } from '@/entitis/Article';
import ListIcon from '@/shared/assets/icons/burger.svg';
import TiledIcon from '@/shared/assets/icons/tile.svg';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Card } from '@/shared/ui/redesigned/Card';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { HStack } from '@/shared/ui/Stack';

import { ArticleViewSelectorProps } from '../ArticleViewSelector';
import cls from '../ArticleViewSelector.module.scss';

const viewsType = [
    {
        view: ArticleView.SMALL,
        icon: TiledIcon,
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
];

export const ArticleViewSelectorRedesigned: FC<ArticleViewSelectorProps> = memo(
    (props: ArticleViewSelectorProps) => {
        const { className, onCLickView, view } = props;
        const { t } = useTranslation();

        const onClick = (newView: ArticleView) => () => {
            onCLickView?.(newView);
        };

        return (
            <Card
                border="round"
                className={classNames(cls.articleViewSelectorRedesigned, {}, [
                    className,
                ])}
            >
                <HStack gap="8">
                    {viewsType.map((viewsType) => (
                        <Icon
                            clickable
                            onClick={onClick(viewsType.view)}
                            className={classNames(
                                '',
                                {
                                    [cls.notSelected]: viewsType.view !== view,
                                },
                                [],
                            )}
                            Svg={viewsType.icon}
                            key={viewsType.view}
                        />
                    ))}
                </HStack>
            </Card>
        );
    },
);
