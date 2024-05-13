import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import { Article, ArticleView } from '../../model/types/article';
import cls from './ArticleList.module.scss';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

interface ArticleListProps {
    className?: string;
    article: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

export const ArticleList: FC<ArticleListProps> = memo((props:ArticleListProps) => {

    const {
        className,
        article,
        isLoading,
        view = ArticleView.SMALL,
    } = props;
    const { t } = useTranslation();

    const renderArticle = (article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
        />
    );

    return (
        <div className={classNames(cls.articleList, {}, [className])}>
            {article.length > 0
                ? article.map(renderArticle)
                : null}
        </div>
    );

});
