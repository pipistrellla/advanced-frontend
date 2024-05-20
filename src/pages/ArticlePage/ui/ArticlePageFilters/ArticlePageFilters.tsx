import React, { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import {
    ArticleSortField, ArticleSortSelector, ArticleView, ArticleViewSelector,
} from 'entitis/Article';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Card } from 'shared/ui/Card';
import Input from 'shared/ui/Input/ui/Input';
import { SortOrder } from 'shared/types';
import {
    getArticlePageOrder,
    getArticlePageSearch,
    getArticlePageSort,
    getArticlePageView,
} from '../../model/selectors/articlesPageSelectors';
import { articlePageActions } from '../../model/slices/articlePageSlice';
import cls from './ArticlePageFilters.module.scss';

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
    const onClickChangeView = useCallback((view: ArticleView) => {

        dispatch(articlePageActions.setView(view));

    }, [dispatch]);

    const onClickChangeSort = useCallback((newSort: ArticleSortField) => {

        dispatch(articlePageActions.setSort(newSort));

    }, [dispatch]);
    const onClickChangeOrder = useCallback((newOrder: SortOrder) => {

        dispatch(articlePageActions.setOrder(newOrder));

    }, [dispatch]);

    const onTypeChangeSearch = useCallback((search: string) => {

        dispatch(articlePageActions.setSearch(search));

    }, [dispatch]);

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
                    onChange={onTypeChangeSearch}
                    value={search}
                    placeholder={t('Поиск')}
                />
            </Card>

        </div>
    );

});
