import { EntityState } from '@reduxjs/toolkit';
import { Article } from '@/entitis/Article';

export interface articleDetailsPageRecommendationsSchema extends EntityState<Article> {
    isLoading?:boolean
    error?: string
}
