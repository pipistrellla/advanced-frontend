import React, { FC, memo } from 'react';

import { getRouteProfile } from '@/shared/const/router';
import { toggleFeatures, ToggleFeaturesComponent } from '@/shared/lib/features';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Card } from '@/shared/ui/redesigned/Card';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { Text } from '@/shared/ui/redesigned/Text';
import { HStack, VStack } from '@/shared/ui/Stack';

import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard: FC<CommentCardProps> = memo(
    (props: CommentCardProps) => {
        const { className, comment, isLoading } = props;

        const Skeleton = toggleFeatures({
            name: 'isAppRedesigned',
            off: () => SkeletonDeprecated,
            on: () => SkeletonRedesigned,
        });

        if (isLoading) {
            return (
                <VStack
                    data-testid="CommentCard.Loading"
                    max
                    gap="8"
                    className={classNames(cls.commentCard, {}, [
                        className,
                        cls.loading,
                    ])}
                >
                    <div className={cls.header}>
                        <Skeleton width={40} height={40} border="50%" />
                        <Skeleton
                            height={16}
                            width={100}
                            className={cls.username}
                        />
                    </div>
                    <Skeleton width="100%" height={50} className={cls.text} />
                </VStack>
            );
        }

        if (!comment) {
            return null;
        }

        return (
            <ToggleFeaturesComponent
                feature="isAppRedesigned"
                off={
                    <VStack
                        data-testid="CommentCard.Content"
                        gap="8"
                        max
                        className={classNames(cls.commentCard, {}, [className])}
                    >
                        <AppLinkDeprecated
                            to={getRouteProfile(comment.user.id)}
                            className={cls.header}
                        >
                            {comment.user.avatar && (
                                <AvatarDeprecated
                                    src={comment.user.avatar}
                                    size={40}
                                />
                            )}
                            <TextDeprecated
                                className={cls.username}
                                title={comment.user.username}
                            />
                        </AppLinkDeprecated>
                        <TextDeprecated
                            className={cls.text}
                            text={comment.text}
                        />
                    </VStack>
                }
                on={
                    <Card padding="24" border="round" max>
                        <VStack
                            data-testid="CommentCard.Content"
                            gap="8"
                            max
                            className={classNames(
                                cls.commentCardRedesigned,
                                {},
                                [className],
                            )}
                        >
                            <AppLink to={getRouteProfile(comment.user.id)}>
                                <HStack gap="8">
                                    {comment.user.avatar && (
                                        <Avatar
                                            src={comment.user.avatar}
                                            size={40}
                                        />
                                    )}
                                    <Text bold text={comment.user.username} />
                                </HStack>
                            </AppLink>
                            <Text text={comment.text} />
                        </VStack>
                    </Card>
                }
            />
        );
    },
);
