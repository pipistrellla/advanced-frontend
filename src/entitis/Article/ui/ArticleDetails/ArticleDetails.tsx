import {
    FC, memo, useCallback, useEffect,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import DynamicModuleLoader, { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text, TextTheme } from '@/shared/ui/Text';
import { TextAlign, TextSize } from '@/shared/ui/Text/ui/Text';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Avatar } from '@/shared/ui/Avatar';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import CalendarIcon from '@/shared/assets/icons/calendar.svg';
import { Icon } from '@/shared/ui/Icon';
import { HStack, VStack } from '@/shared/ui/Stack';
import { ArticleBlockType } from '../../model/consts/consts';
import { fetchArticleById } from '../../../Article/model/services/fetchArticleById/fetchArticleById';
import { articleDetailReducer } from '../../../Article/model/slice/articleDetailSlice';
import cls from './ArticleDetails.module.scss';
import {
    getArticleDetailsError,
    getArticleDetailsIsLoading,
    getArticleDetailsData,
} from '../../model/selectors/articleDetails';
import { ArticleBlock, ArticleTextBlock } from '../../../Article/model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleDetailsProps {
    className?: string;
    id: string
}

const reducers: ReducersList = {
    articleDetails: articleDetailReducer,
};
export const ArticleDetails: FC<ArticleDetailsProps> = memo((props: ArticleDetailsProps) => {

    const {
        className,
        id,
    } = props;
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const article = useSelector(getArticleDetailsData);

    const renderBlock = useCallback((block: ArticleBlock) => {

        switch (block.type) {
        case ArticleBlockType.CODE:
            return (
                <ArticleCodeBlockComponent
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
            );
        case ArticleBlockType.IMAGE:
            return (
                <ArticleImageBlockComponent
                    key={block.id}
                    className={cls.block}
                    block={block}
                />
            );
        case ArticleBlockType.TEXT:
            return (
                <ArticleTextBlockComponent
                    key={block.id}
                    className={cls.block}
                    block={block}
                />
            );
        default:
            return null;
        }

    }, []);

    useEffect(() => {

        if (__PROJECT__ !== 'storybook')
            dispatch(fetchArticleById(id));

    }, [dispatch, id]);

    let content;

    if (isLoading) {

        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
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
                <HStack
                    justify="center"
                    max
                    className={cls.avatarWrapper}
                >
                    <Avatar
                        size={200}
                        src={article?.img}
                        className={cls.avatar}
                    />
                </HStack>
                <VStack gap="4">
                    <Text
                        className={cls.title}
                        title={article?.title}
                        text={article?.subtitle}
                        size={TextSize.L}
                    />
                    <HStack
                        gap="8"
                        className={cls.articleInfo}
                    >
                        <Icon Svg={EyeIcon} className={cls.icon} />
                        <Text text={String(article?.views)} />
                    </HStack>
                    <HStack
                        gap="8"
                        className={cls.articleInfo}
                    >
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

});
