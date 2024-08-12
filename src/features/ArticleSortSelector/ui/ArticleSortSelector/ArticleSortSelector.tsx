import React, { FC, memo, useMemo } from 'react';

import { useTranslation } from 'react-i18next';

import { ArticleSortField } from '@/entitis/Article';
import { ToggleFeaturesComponent } from '@/shared/lib/features';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { SortOrder } from '@/shared/types';
import { Select as SelectDeprecated } from '@/shared/ui/deprecated/Select';
import { SelectOptions } from '@/shared/ui/deprecated/Select/ui/Select';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { Text } from '@/shared/ui/redesigned/Text';
import { VStack } from '@/shared/ui/Stack';

import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector: FC<ArticleSortSelectorProps> = memo(
    (props: ArticleSortSelectorProps) => {
        const { className, onChangeOrder, order, sort, onChangeSort } = props;

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
            <ToggleFeaturesComponent
                feature="isAppRedesigned"
                off={
                    <div
                        className={classNames(cls.articleSortSelector, {}, [
                            className,
                        ])}
                    >
                        <SelectDeprecated<ArticleSortField>
                            options={sortFieldOption}
                            label={t('Сортировать по')}
                            value={sort}
                            onChange={onChangeSort}
                        />
                        <SelectDeprecated<SortOrder>
                            className={cls.order}
                            options={orderOptions}
                            label={t('По')}
                            value={order}
                            onChange={onChangeOrder}
                        />
                    </div>
                }
                on={
                    <div
                        className={classNames(
                            cls.articleSortSelectorRedesigned,
                            {},
                            [className],
                        )}
                    >
                        <VStack gap="8">
                            <Text text={t('Сортировать по')} />
                            <ListBox<ArticleSortField>
                                value={sort}
                                onChange={onChangeSort}
                                items={sortFieldOption}
                            />
                            <ListBox<SortOrder>
                                items={orderOptions}
                                value={order}
                                onChange={onChangeOrder}
                            />
                        </VStack>
                    </div>
                }
            />
        );
    },
);
