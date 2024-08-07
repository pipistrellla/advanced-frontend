import { FC, memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { ArticleSortField, ArticleType, ArticleView } from '@/entitis/Article';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { SortOrder } from '@/shared/types';
import { Card } from '@/shared/ui/deprecated/Card';
import Input from '@/shared/ui/deprecated/Input/ui/Input';

import cls from './ArticlePageFilters.module.scss';
import {
    getArticlePageOrder,
    getArticlePageSearch,
    getArticlePageSort,
    getArticlePageType,
    getArticlePageView,
} from '../../model/selectors/articlesPageSelectors';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { articlePageActions } from '../../model/slices/articlePageSlice';

interface ArticlePageFiltersProps {
    className?: string;
}

export const ArticlePageFilters: FC<ArticlePageFiltersProps> = memo((props) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlePageView);
    const sort = useSelector(getArticlePageSort);
    const order = useSelector(getArticlePageOrder);
    const search = useSelector(getArticlePageSearch);
    const type = useSelector(getArticlePageType);
    const onClickChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlePageActions.setView(view));
        },
        [dispatch],
    );

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debounceFetchData = useDebounce(fetchData, 500);

    const onClickChangeSort = useCallback(
        (newSort: ArticleSortField) => {
            dispatch(articlePageActions.setSort(newSort));
            dispatch(articlePageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );
    const onClickChangeOrder = useCallback(
        (newOrder: SortOrder) => {
            dispatch(articlePageActions.setOrder(newOrder));
            dispatch(articlePageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );

    const onClickChangeSearch = useCallback(
        (search: string) => {
            dispatch(articlePageActions.setSearch(search));
            dispatch(articlePageActions.setPage(1));
            debounceFetchData();
        },
        [debounceFetchData, dispatch],
    );

    const onClickChangeType = useCallback(
        (value: ArticleType) => {
            dispatch(articlePageActions.setType(value));
            dispatch(articlePageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );

    return (
        <div className={classNames(cls.articlePageFilters, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeOrder={onClickChangeOrder}
                    onChangeSort={onClickChangeSort}
                />
                <ArticleViewSelector
                    view={view}
                    onCLickView={onClickChangeView}
                />
            </div>
            <Card className={cls.search}>
                <Input
                    onChange={onClickChangeSearch}
                    value={search}
                    placeholder={t('Поиск')}
                />
            </Card>
            <ArticleTypeTabs
                className={cls.tabs}
                value={type}
                onChangeType={onClickChangeType}
            />
        </div>
    );
});
