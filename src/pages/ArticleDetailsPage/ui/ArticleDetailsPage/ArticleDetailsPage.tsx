import { FC, memo } from 'react';

import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { ArticleDetails } from '@/entitis/Article';
import { Counter } from '@/entitis/Counter';
import { AddArticleRating } from '@/features/AddArticleRating';
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList';
import DynamicModuleLoader, {
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getFeatureFlags } from '@/shared/lib/features';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { VStack } from '@/shared/ui/Stack';
import { Text, TextTheme } from '@/shared/ui/Text';
import { Page } from '@/widgets/Page';

import cls from './ArticleDetailsPage.module.scss';
import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

interface ArticleDetailsPageProps {
    className?: string;
    testId?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const { className, testId } = props;
    const { t } = useTranslation('article');

    const { id } = useParams<{ id: string }>();

    const isArticleRatingEnabled = getFeatureFlags('isArticleRatingEnabled');
    const isCounterEnabled = getFeatureFlags('isCounterEnabled');

    if (!id && !testId) {
        return (
            <Page
                className={classNames(cls.articleDetailsPage, {}, [className])}
            >
                <ArticleDetailsPageHeader />
                <Text title={t('Cтатья не найдена')} theme={TextTheme.ERROR} />
            </Page>
        );
    }

    return (
        <DynamicModuleLoader removeAFterUnmount reducers={reducers}>
            <Page
                data-testid="ArticleDetails"
                className={classNames(cls.articleDetailsPage, {}, [className])}
            >
                <VStack gap="16" max>
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id!} />
                    {isCounterEnabled && <Counter />}
                    {isArticleRatingEnabled && (
                        <AddArticleRating articleId={id!} />
                    )}
                    <ArticleRecommendationsList />
                    <ArticleDetailsComments id={id!} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
