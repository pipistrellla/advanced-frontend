import React, {
    FC, memo, useMemo,
} from 'react';

import { useTranslation } from 'react-i18next';

import { ArticleSortField } from '@/entitis/Article';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { SortOrder } from '@/shared/types';
import { Select } from '@/shared/ui/Select';
import { SelectOptions } from '@/shared/ui/Select/ui/Select';

import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void
    onChangeSort: (newSort: ArticleSortField) => void
}

export const ArticleSortSelector: FC<ArticleSortSelectorProps> = memo((props:ArticleSortSelectorProps) => {

    const {
        className,
        onChangeOrder,
        order,
        sort,
        onChangeSort,
    } = props;

    const { t } = useTranslation('article');

    const orderOptions = useMemo<SelectOptions<SortOrder>[]>(
        () => [
            {
                value: 'asc',
                content: t('возрастанию'),
            },
            {
                value: 'desc',
                content: t('убыванию'),
            },
        ],

        [t],
    );
    const sortFieldOption = useMemo<SelectOptions<ArticleSortField>[]>(
        () => [
            {
                value: ArticleSortField.CREATED,
                content: t('дате создания'),
            },
            {
                value: ArticleSortField.TITLE,
                content: t('названию'),
            },
            {
                value: ArticleSortField.VIEWS,
                content: t('просмотрам'),
            },
        ],

        [t],
    );

    //  если типы не подходят, то можно явно скастовать к нужному
    // но лучще такого не делать
    // лучше использовать дженирики, пример такой реализации находиться в select
    // const changeSortHandler = useCallback((newSort: string) => {

    //     onChangeSort(newSort as ArticleSortField);

    // }, [onChangeSort]);
    // const changeOrderHandler = useCallback((newOrder: string) => {

    //     onChangeOrder(newOrder as SortOrder);

    // }, [onChangeOrder]);

    return (
        <div className={classNames(cls.articleSortSelector, {}, [className])}>
            <Select<ArticleSortField>
                options={sortFieldOption}
                label={t('Сортировать по')}
                value={sort}
                onChange={onChangeSort}
            />
            <Select<SortOrder>
                className={cls.order}
                options={orderOptions}
                label={t('По')}
                value={order}
                onChange={onChangeOrder}
            />
        </div>
    );

});
