import { FC, memo } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { ArticleList } from '@/entitis/Article';
import { Text } from '@/shared/ui/Text';

import {
    getArticlePageError,
    getArticlePageIsLoading,
    getArticlePageView,
} from '../../model/selectors/articlesPageSelectors';
import { getArticles } from '../../model/slices/articlePageSlice';

interface ArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList: FC<ArticleInfiniteListProps> = memo((props) => {

    const { className } = props;

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlePageIsLoading);
    const view = useSelector(getArticlePageView);
    const error = useSelector(getArticlePageError);
    const { t } = useTranslation('article');

    if (error)
        <Text title={t('Произошла ошибка')} />;
    return (
        <ArticleList
            isLoading={isLoading}
            articles={articles}
            view={view}
            className={className}
        />
    );

});
