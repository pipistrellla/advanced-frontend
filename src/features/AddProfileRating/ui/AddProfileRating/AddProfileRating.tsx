import { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { RatingCard } from '@/entitis/Rating';
import { getUserAuthData } from '@/entitis/User';
import { ToggleFeaturesComponent } from '@/shared/lib/features';
import { Skeleton as SkeltonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeltonRedesigned } from '@/shared/ui/redesigned/Skeleton';

import { useGetProfileRating, useRateProfile } from '../../api/ProfileRating';

export interface AddProfileRatingProps {
    className?: string;
    ProfileId: string;
}

const AddProfileRating = memo((props: AddProfileRatingProps) => {
    const { className, ProfileId } = props;
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);
    const { data, isLoading, refetch } = useGetProfileRating({
        ProfileId,
        userId: userData?.id ?? '',
    });

    const [rateProfileMutation] = useRateProfile();

    const handleSendProfileRate = useCallback(
        (starsCount: number, feedback?: string) => {
            try {
                rateProfileMutation({
                    userId: userData?.id ?? '',
                    ProfileId,
                    rate: starsCount,
                    feedback,
                });
                refetch();
            } catch (e) {
                console.log(e);
            }
        },
        [ProfileId, rateProfileMutation, refetch, userData?.id],
    );

    const onAccept = useCallback(
        (starsCount: number, feedback?: string) => {
            handleSendProfileRate(starsCount, feedback);
        },
        [handleSendProfileRate],
    );

    const onCancel = useCallback(
        (starsCount: number) => {
            handleSendProfileRate(starsCount);
        },
        [handleSendProfileRate],
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

    if (ProfileId === userData?.id) {
        return null;
    }

    const rating = data?.[0];

    return (
        <RatingCard
            onAccept={onAccept}
            onCancel={onCancel}
            rate={rating?.rate}
            className={className}
            title={t('Оцените профиль пользователя')}
            feedbackTitle={t('Оставьте отзыв на пользователя')}
            hasFeedback
            comment={rating?.feedback}
        />
    );
});

export default AddProfileRating;
