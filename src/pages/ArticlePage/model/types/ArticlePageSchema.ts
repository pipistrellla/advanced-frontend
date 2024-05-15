import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entitis/Article';

export interface ArticlePageSchema extends EntityState<Article> {
    isLoading?: boolean
    error?: string

    view: ArticleView;
    // для пагинаации
    page: number;
    limit?: number;
    hasMore: boolean;
}
