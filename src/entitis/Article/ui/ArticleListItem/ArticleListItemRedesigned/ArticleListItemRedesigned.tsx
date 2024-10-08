import { FC, memo } from 'react';

import { useTranslation } from 'react-i18next';

import NoImage from '@/shared/assets/icons/error-image-photo-icon.svg';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { getRouteArticleDetails } from '@/shared/const/router';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Text } from '@/shared/ui/redesigned/Text';
import { HStack, VStack } from '@/shared/ui/Stack';

import { ArticleView, ArticleBlockType } from '../../../model/consts/consts';
import { ArticleTextBlock } from '../../../model/types/article';
import { ArticleListItemProps } from '../ArticleListItem';
import cls from '../ArticleListItem.module.scss';

export const ArticleListItemRedesigned: FC<ArticleListItemProps> = memo(
    (props: ArticleListItemProps) => {
        const { className, article, view, target } = props;
        const { t } = useTranslation();

        const UserInfo = (
            <>
                <Avatar
                    className={cls.avatar}
                    size={32}
                    src={article.user.avatar}
                />
                <Text bold text={article.user.username} />
            </>
        );

        const views = (
            <HStack gap="8">
                <Icon Svg={EyeIcon} />
                <Text text={String(article.views)} className={cls.views} />
            </HStack>
        );

        if (view === ArticleView.BIG) {
            const textBlock = article.blocks.find(
                (block) => block.type === ArticleBlockType.TEXT,
            ) as ArticleTextBlock;

            return (
                <Card
                    padding="24"
                    max
                    data-testid="ArticleListItem"
                    className={classNames(cls.articleListItemRedesigned, {}, [
                        className,
                        cls[view],
                    ])}
                >
                    <VStack max gap="16">
                        <HStack gap="8" max>
                            {UserInfo}
                            <Text text={article.createdAt} />
                        </HStack>

                        <Text bold title={article.title} />
                        <Text size="s" title={article.subtitle} />

                        <AppImage
                            fallback={<Skeleton width="100%" height={250} />}
                            errorFallback={
                                <Icon Svg={NoImage} width="100%" height={250} />
                            }
                            src={article.img}
                            className={cls.img}
                            alt={article.title}
                        />
                        {textBlock?.paragraphs && (
                            <Text
                                className={cls.textBlock}
                                text={textBlock.paragraphs.slice(0, 2).join('')}
                            />
                        )}
                        <HStack max justify="between">
                            <AppLink
                                target={target}
                                to={getRouteArticleDetails(article.id)}
                            >
                                <Button variant="outline">
                                    {t('Читать далее...')}
                                </Button>
                            </AppLink>
                            {views}
                        </HStack>
                    </VStack>
                </Card>
            );
        }

        return (
            <AppLink
                data-testid="ArticleListItem"
                target={target}
                to={getRouteArticleDetails(article.id)}
                className={classNames(cls.articleListItemRedesigned, {}, [
                    className,
                    cls[view],
                ])}
            >
                <Card className={cls.card} border="round" padding="0">
                    <AppImage
                        fallback={<Skeleton width="100%" height={400} />}
                        errorFallback={
                            <Icon Svg={NoImage} width="100%" height={200} />
                        }
                        src={article.img}
                        alt={article.title}
                        className={cls.img}
                    />
                    <VStack className={cls.info} gap="4">
                        <Text text={article.title} />
                        <VStack gap="4" className={cls.footer} max>
                            <HStack justify="between" max>
                                <Text text={article.createdAt} />
                                {views}
                            </HStack>

                            <HStack gap="4">{UserInfo}</HStack>
                        </VStack>
                    </VStack>
                </Card>
            </AppLink>
        );
    },
);
