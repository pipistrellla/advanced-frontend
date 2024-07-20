import { ArticleDetailsCommentSchema } from './ArticleDetailsCommentSchema';
import { articleDetailsPageRecommendationsSchema } from './ArticleDetailsPageRecommendationsSchema';

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentSchema;
    recommendations: articleDetailsPageRecommendationsSchema;
}
