import React, { FC, memo } from 'react';

import { useTranslation } from 'react-i18next';

import { ArticleSortField, ArticleType } from '@/entitis/Article';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { SortOrder } from '@/shared/types';
import { Card } from '@/shared/ui/redesigned/Card';

import cls from './ArticleFilters.module.scss';

interface ArticleFiltersProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    value: ArticleType;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleFilters: FC<ArticleFiltersProps> = memo(
    (props: ArticleFiltersProps) => {
        const {
            className,
            onChangeOrder,
            onChangeSort,
            onChangeType,
            order,
            sort,
            value,
        } = props;
        const { t } = useTranslation('article');

        return (
            <Card className={classNames(cls.articleFilters, {}, [className])}>
                {/* <VStack gap="32">
                    <Input
                        onChange={onClickChangeSearch}
                        value={search}
                        placeholder={t('Поиск')}
                    />
                    <ArticleSortSelector
                        order={order}
                        sort={sort}
                        onChangeOrder={onClickChangeOrder}
                        onChangeSort={onClickChangeSort}
                    />
                    <ArticleTypeTabs
                        className={cls.tabs}
                        value={type}
                        onChangeType={onClickChangeType}
                    />
                </VStack> */}
            </Card>
        );
    },
);
