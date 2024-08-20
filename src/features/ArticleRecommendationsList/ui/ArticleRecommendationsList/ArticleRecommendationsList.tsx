import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { ArticleList } from '@/entitis/Article';
import { toggleFeatures, ToggleFeaturesComponent } from '@/shared/lib/features';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { TextSize, Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { Text as TextRedesigned } from '@/shared/ui/redesigned/Text';
import { HStack, VStack } from '@/shared/ui/Stack';

import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo(
    (props: ArticleRecommendationsListProps) => {
        const { className } = props;
        const { t } = useTranslation('article');
        const {
            isLoading,
            data: articles,
            error,
        } = useArticleRecommendationsList(3);

        const Skeleton = toggleFeatures({
            name: 'isAppRedesigned',
            off: () => SkeletonDeprecated,
            on: () => SkeletonRedesigned,
        });

        if (isLoading) {
            return (
                <HStack max gap="8">
                    <Skeleton width="30%" height={200} />
                    <Skeleton width="30%" height={200} />
                    <Skeleton width="30%" height={200} />
                </HStack>
            );
        }

        if (error || !articles) {
            return (
                <VStack>
                    <ToggleFeaturesComponent
                        feature="isAppRedesigned"
                        off={<TextDeprecated title={t('Произошла ошибка')} />}
                        on={<TextRedesigned title={t('Произошла ошибка')} />}
                    />
                </VStack>
            );
        }

        return (
            <VStack
                data-testid="ArticleRecommendationsList"
                gap="8"
                className={classNames('', {}, [className])}
            >
                <ToggleFeaturesComponent
                    feature="isAppRedesigned"
                    off={
                        <TextDeprecated
                            size={TextSize.L}
                            title={t('Рекомендуем')}
                        />
                    }
                    on={<TextRedesigned size="l" title={t('Рекомендуем')} />}
                />
                <ArticleList articles={articles} target="_blank" />
            </VStack>
        );
    },
);
