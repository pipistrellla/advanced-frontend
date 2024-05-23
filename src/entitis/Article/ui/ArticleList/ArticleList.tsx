import React, { FC, HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import { Text } from 'shared/ui/Text';
import { TextSize } from 'shared/ui/Text/ui/Text';
import { Article, ArticleView } from '../../model/types/article';
import cls from './ArticleList.module.scss';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget
}

export const ArticleList: FC<ArticleListProps> = memo((props:ArticleListProps) => {

    const {
        className,
        articles,
        isLoading,
        target,
        view = ArticleView.SMALL,
    } = props;
    const { t } = useTranslation();

    const getSkeletons = (view: ArticleView) => (
        new Array(view === ArticleView.SMALL ? 15 : 3)
            .fill(0)
            .map((item, index) => (
                <ArticleListItemSkeleton
                    className={cls.card}
                    key={index}
                    view={view}
                />
            ))
    );

    const renderArticle = (article: Article) => (
        <ArticleListItem
            className={cls.card}
            article={article}
            view={view}
            key={article.id}
            target={target}
        />
    );

    if (!isLoading && !articles.length) {

        return (
            <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={t('Статей не найдено')} />
            </div>
        );

    }

    return (
        <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : null}
            {isLoading && getSkeletons(view)}
        </div>
    );

});
