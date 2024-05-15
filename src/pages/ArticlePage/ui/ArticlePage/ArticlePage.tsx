import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import { ArticleList, ArticleViewSelector } from 'entitis/Article';
import { ArticleView } from 'entitis/Article/model/types/article';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Page } from 'shared/ui/Page';
import { fetchNextArticlePage } from 'pages/ArticlePage/model/services/fetchNextArticlePage/fetchNextArticlePage';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import {
    getArticlePageError,
    getArticlePageHasMore,
    getArticlePageIsLoading,
    getArticlePagePageNumber,
    getArticlePageView,
} from '../../model/selectors/articlesPageSelectors';
import { articlePageActions, articlePageReducer, getArticles } from '../../model/slices/articlePageSlice';
import cls from './ArticlePage.module.scss';

interface ArticlePageProps {
className?: string;
}

const reducers: ReducersList = {
    articlePage: articlePageReducer,
};

const ArticlePage: FC<ArticlePageProps> = (props) => {

    const { className } = props;
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlePageIsLoading);
    const view = useSelector(getArticlePageView);

    const onLoadNextPart = useCallback(() => {

        dispatch(fetchNextArticlePage());

    }, [dispatch]);

    useInitialEffect(() => {

        dispatch(articlePageActions.initState());
        dispatch(fetchArticlesList(
            {
                page: 1,
            },
        ));

    });

    const onClickChangeView = useCallback((view: ArticleView) => {

        dispatch(articlePageActions.setView(view));

    }, [dispatch]);
    return (
        <DynamicModuleLoader reducers={reducers} removeAFterUnmount>
            <Page onScrollEnd={onLoadNextPart} className={classNames(cls.articlePage, {}, [className])}>
                <ArticleViewSelector view={view} onCLickView={onClickChangeView} />
                <ArticleList
                    isLoading={isLoading}
                    articles={articles}
                    view={view}
                />
            </Page>
        </DynamicModuleLoader>
    );

};

export default memo(ArticlePage);
