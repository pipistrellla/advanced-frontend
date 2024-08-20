import { FC, memo, useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import CalendarIcon from '@/shared/assets/icons/calendar.svg';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import DynamicModuleLoader, {
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import {
    Text,
    TextAlign,
    TextTheme,
    TextSize,
} from '@/shared/ui/deprecated/Text';
import { HStack, VStack } from '@/shared/ui/Stack';

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

export const ArticleDetailsDeprecated: FC<ArticleDetailsProps> = memo(
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
                    align={TextAlign.CENTER}
                    title={t('ошибка при загрузке статьи')}
                    theme={TextTheme.ERROR}
                />
            );
        } else {
            content = (
                <>
                    <HStack justify="center" max className={cls.avatarWrapper}>
                        <Avatar
                            size={200}
                            src={article?.img}
                            className={cls.avatar}
                        />
                    </HStack>
                    <VStack data-testid="ArticleDetails.Info" max gap="4">
                        <Text
                            className={cls.title}
                            title={article?.title}
                            text={article?.subtitle}
                            size={TextSize.L}
                        />
                        <HStack gap="8" className={cls.articleInfo}>
                            <Icon Svg={EyeIcon} className={cls.icon} />
                            <Text text={String(article?.views)} />
                        </HStack>
                        <HStack gap="8" className={cls.articleInfo}>
                            <Icon Svg={CalendarIcon} className={cls.icon} />
                            <Text text={String(article?.createdAt)} />
                        </HStack>
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
