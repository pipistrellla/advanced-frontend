import {
    FC,
    memo,
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import { ArticleDetails } from 'entitis/Article';
import {
    useParams,
} from 'react-router-dom';
import {
    Text,
    TextTheme,
} from 'shared/ui/Text';
import DynamicModuleLoader, {
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from 'widgets/Page';
import { VStack } from 'shared/ui/Stack';
import { ArticleRecommendationsList } from 'features/ArticleRecommendationsList';
import { articleDetailsPageReducer } from '../../model/slice';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';

interface ArticleDetailsPageProps {
    className?: string;
    testId?: string
}

const reducers : ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {

    const {
        className,
        testId,
    } = props;
    const { t } = useTranslation('article');

    const { id } = useParams<{id:string}>();

    if (!id && !testId) {

        return (
            <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
                <ArticleDetailsPageHeader />
                <Text title={t('Cтатья не найдена')} theme={TextTheme.ERROR} />
            </Page>
        );

    }
    return (
        <DynamicModuleLoader
            removeAFterUnmount
            reducers={reducers}
        >
            <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
                <VStack
                    gap="16"
                    max
                >
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id!} />
                    <ArticleRecommendationsList />
                    <ArticleDetailsComments id={id!} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );

};

export default memo(ArticleDetailsPage);
