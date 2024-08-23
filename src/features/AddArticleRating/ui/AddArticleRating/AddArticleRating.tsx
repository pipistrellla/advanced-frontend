import { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { RatingCard } from '@/entitis/Rating';
import { getUserAuthData } from '@/entitis/User';
import { ToggleFeaturesComponent } from '@/shared/lib/features';
import { Skeleton as SkeltonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeltonRedesigned } from '@/shared/ui/redesigned/Skeleton';

import {
    useGetArticleRating,
    useRateArticle,
} from '../../api/ArticleRatingApi';

export interface AddArticleRatingProps {
    className?: string;
    articleId: string;
}

const AddArticleRating = memo((props: AddArticleRatingProps) => {
    const { className, articleId } = props;
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);
    const { data, isLoading, refetch } = useGetArticleRating({
        articleId,
        userId: userData?.id ?? '',
    });

    // функция которая вызывает мутацию и доп настройки
    const [rateArticleMutation] = useRateArticle();

    const handleSendArticleRate = useCallback(
        (starsCount: number, feedback?: string) => {
            try {
                rateArticleMutation({
                    userId: userData?.id ?? '',
                    articleId,
                    rate: starsCount,
                    feedback,
                });
                refetch();
            } catch (e) {
                console.log(e);
            }
        },
        [articleId, rateArticleMutation, refetch, userData?.id],
    );

    const onAccept = useCallback(
        (starsCount: number, feedback?: string) => {
            handleSendArticleRate(starsCount, feedback);
        },
        [handleSendArticleRate],
    );

    const onCancel = useCallback(
        (starsCount: number) => {
            handleSendArticleRate(starsCount);
        },
        [handleSendArticleRate],
    );

    if (isLoading) {
        return (
            <ToggleFeaturesComponent
                feature="isAppRedesigned"
                off={<SkeltonDeprecated width="100%" height={120} />}
                on={<SkeltonRedesigned width="100%" height={120} />}
            />
        );
    }

    const rating = data?.[0];

    return (
        <RatingCard
            onAccept={onAccept}
            onCancel={onCancel}
            rate={rating?.rate}
            className={className}
            title={t('Оцените статью')}
            feedbackTitle={t('Оставьте отзыв на статью')}
            hasFeedback
            comment={rating?.feedback}
        />
    );
});

export default AddArticleRating;
