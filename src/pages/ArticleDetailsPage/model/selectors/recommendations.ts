import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleRecommendationsCommentsIsLoading = (
    state: StateSchema,
) => state.articleDetailsPage?.recommendations?.isLoading;
export const getArticleRecommendationsCommentsError = (state: StateSchema) =>
    state.articleDetailsPage?.recommendations?.error;
