import React, { FC, memo } from 'react';

import { useTranslation } from 'react-i18next';

import { ArticleSortField, ArticleType } from '@/entitis/Article';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import SearchIcon from '@/shared/assets/icons/search.svg';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { SortOrder } from '@/shared/types';
import { Card } from '@/shared/ui/redesigned/Card';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Input } from '@/shared/ui/redesigned/Input';
import { VStack } from '@/shared/ui/Stack';

import cls from './ArticleFilters.module.scss';

interface ArticleFiltersProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    type: ArticleType;
    search: string;
    onChangeSearch: (search: string) => void;
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
            onChangeSearch,
            order,
            sort,
            type,
            search,
        } = props;
        const { t } = useTranslation('article');

        return (
            <Card
                padding="24"
                className={classNames(cls.articleFilters, {}, [className])}
            >
                <VStack gap="32">
                    <Input
                        addonLeft={<Icon Svg={SearchIcon} />}
                        onChange={onChangeSearch}
                        value={search}
                        placeholder={t('Поиск')}
                        size="s"
                    />
                    <ArticleSortSelector
                        order={order}
                        sort={sort}
                        onChangeOrder={onChangeOrder}
                        onChangeSort={onChangeSort}
                    />
                    <ArticleTypeTabs
                        className={cls.tabs}
                        value={type}
                        onChangeType={onChangeType}
                    />
                </VStack>
            </Card>
        );
    },
);
