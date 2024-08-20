import { FC, memo, useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import NoImage from '@/shared/assets/icons/error-image-photo-icon.svg';
import DynamicModuleLoader, {
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Text } from '@/shared/ui/redesigned/Text';
import { VStack } from '@/shared/ui/Stack';

import {
    getArticleDetailsIsLoading,
    getArticleDetailsError,
    getArticleDetailsData,
} from '../../../model/selectors/articleDetails';
import { fetchArticleById } from '../../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailReducer } from '../../../testing';
import { ArticleDetailsProps } from '../ArticleDetails';
import cls from '../ArticleDetails.module.scss';
import { renderBlock } from '../renderBlock';

const reducers: ReducersList = {
    articleDetails: articleDetailReducer,
};
export const ArticleDetailsRedesigned: FC<ArticleDetailsProps> = memo(
    (props: ArticleDetailsProps) => {
        const { className, id } = props;
        const { t } = useTranslation('article');
        const dispatch = useAppDispatch();
        const isLoading = useSelector(getArticleDetailsIsLoading);
        const error = useSelector(getArticleDetailsError);
        const article = useSelector(getArticleDetailsData);

        useEffect(() => {
            if (__PROJECT__ !== 'storybook') {
                dispatch(fetchArticleById(id));
            }
        }, [dispatch, id]);

        let content;

        if (isLoading) {
            content = (
                <>
                    <Skeleton
                        className={cls.avatar}
                        width={200}
                        height={200}
                        border="50%"
                    />
                    <Skeleton className={cls.title} width={300} height={32} />
                    <Skeleton
                        className={cls.skeleton}
                        width={600}
                        height={24}
                    />
                    <Skeleton
                        className={cls.skeleton}
                        width="100%"
                        height={200}
                    />
                    <Skeleton
                        className={cls.skeleton}
                        width="100%"
                        height={200}
                    />
                </>
            );
        } else if (error) {
            content = (
                <Text
                    align="center"
                    title={t('ошибка при загрузке статьи')}
                    variant="error"
                />
            );
        } else {
            content = (
                <>
                    <Text title={article?.title} size="l" bold />
                    <Text title={article?.subtitle} />
                    <VStack max align="center">
                        <AppImage
                            fallback={
                                <Skeleton
                                    width="100%"
                                    height={420}
                                    border="16px"
                                />
                            }
                            errorFallback={
                                <Icon Svg={NoImage} width="100%" height={420} />
                            }
                            src={article?.img}
                            className={cls.img}
                        />
                    </VStack>
                    {article?.blocks.map(renderBlock)}
                </>
            );
        }

        return (
            <DynamicModuleLoader reducers={reducers} removeAFterUnmount>
                <VStack
                    max
                    gap="16"
                    className={classNames(cls.articleDetails, {}, [className])}
                >
                    {content}
                </VStack>
            </DynamicModuleLoader>
        );
    },
);
