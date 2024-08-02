import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { ArticleList } from '@/entitis/Article';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { HStack, VStack } from '@/shared/ui/deprecated/Stack';
import { TextSize, Text } from '@/shared/ui/deprecated/Text';

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
                    <Text title={t('Произошла ошибка')} />
                </VStack>
            );
        }

        return (
            <VStack
                data-testid="ArticleRecommendationsList"
                gap="8"
                className={classNames('', {}, [className])}
            >
                <Text size={TextSize.L} title={t('Рекомендуем')} />
                <ArticleList articles={articles} target="_blank" />
            </VStack>
        );
    },
);
