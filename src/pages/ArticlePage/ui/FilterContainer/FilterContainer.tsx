import React, { FC, memo } from 'react';

import { useTranslation } from 'react-i18next';

import { ArticleFilters } from '@/widgets/ArticleFilters';

import { useArticleFilter } from '../../lib/hooks/useArticleFilter';

interface FilterContainerProps {
    className?: string;
}

export const FilterContainer: FC<FilterContainerProps> = memo((props) => {
    const { className } = props;
    const { t } = useTranslation();
    const {
        onClickChangeOrder,
        onClickChangeSearch,
        onClickChangeSort,
        onClickChangeType,
        order,
        search,
        sort,
        type,
    } = useArticleFilter();

    return (
        <ArticleFilters
            onChangeOrder={onClickChangeOrder}
            onChangeSort={onClickChangeSort}
            onChangeType={onClickChangeType}
            onChangeSearch={onClickChangeSearch}
            order={order}
            sort={sort}
            type={type}
            search={search}
            className={className}
        />
    );
});
