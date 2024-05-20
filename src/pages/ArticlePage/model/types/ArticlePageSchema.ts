import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entitis/Article';
import { ArticleSortField } from 'entitis/Article/model/types/article';
import { SortOrder } from 'shared/types';

export interface ArticlePageSchema extends EntityState<Article> {
    isLoading?: boolean
    error?: string

    // для пагинаации
    page: number;
    limit: number;
    hasMore: boolean;

    // filters
    view: ArticleView;
    order: SortOrder;
    sort: ArticleSortField;
    search: string;

    _inited?: boolean
}
