import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from 'widgets/Page';
import { useSearchParams } from 'react-router-dom';
import { fetchNextArticlePage } from '../../model/services/fetchNextArticlePage/fetchNextArticlePage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { articlePageReducer } from '../../model/slices/articlePageSlice';
import cls from './ArticlePage.module.scss';
import { ArticlePageFilters } from '../ArticlePageFilters/ArticlePageFilters';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';

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
    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {

        if (__PROJECT__ !== 'storybook')
            dispatch(fetchNextArticlePage());

    }, [dispatch]);

    useInitialEffect(() => {

        dispatch(initArticlesPage(searchParams));

    });

    return (
        <DynamicModuleLoader reducers={reducers} removeAFterUnmount={false}>
            <Page onScrollEnd={onLoadNextPart} className={classNames(cls.articlePage, {}, [className])}>
                <ArticlePageFilters />
                <ArticleInfiniteList className={cls.list} />
            </Page>
        </DynamicModuleLoader>
    );

};

export default memo(ArticlePage);
