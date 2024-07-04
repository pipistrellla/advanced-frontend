import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entitis/Rating';
import { useGetArticleRating, useRateArticle } from '../../api/ArticleRatingApi';
import { getUserAuthData } from '@/entitis/User';
import { Skeleton } from '@/shared/ui/Skeleton';

export interface AddArticleRatingProps {
    className?: string;
    articleId: string
}

const AddArticleRating = memo((props: AddArticleRatingProps) => {

    const {
        className,
        articleId,
    } = props;
    const { t } = useTranslation();

    const userData = useSelector(getUserAuthData);
    const { data, isLoading } = useGetArticleRating({
        articleId,
        userId: userData?.id ?? '',
    });

    // функция которая вызывает мутацию и доп настройки
    const [rateArticleMutation] = useRateArticle();

    const handleSendArticleRate = useCallback((starsCount: number, feedback?: string) => {

        try {

            rateArticleMutation({
                userId: userData?.id ?? '',
                articleId,
                rate: starsCount,
                feedback,
            });

        } catch (e) {

            console.log(e);

        }

    }, [articleId, rateArticleMutation, userData?.id]);

    const onAccept = useCallback((starsCount: number, feedback?: string) => {

        handleSendArticleRate(starsCount, feedback);

    }, [handleSendArticleRate]);

    const onCancel = useCallback((starsCount: number) => {

        handleSendArticleRate(starsCount);

    }, [handleSendArticleRate]);

    if (isLoading) {

        return (
            <Skeleton
                width="100%"
                height={120}
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
