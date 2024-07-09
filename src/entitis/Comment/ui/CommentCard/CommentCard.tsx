import React, { FC, memo } from 'react';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Text } from '@/shared/ui/Text';
import { Skeleton } from '@/shared/ui/Skeleton';
import { RoutePath } from '@/shared/const/router';
import { HStack, VStack } from '@/shared/ui/Stack';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';
import { AppLink } from '@/shared/ui/AppLink';

interface CommentCardProps {
    className?: string;
    comment?: Comment
    isLoading?: boolean
}

export const CommentCard: FC<CommentCardProps> = memo((props) => {

    const {
        className,
        comment,
        isLoading,
    } = props;

    if (isLoading) {

        return (
            <VStack
                max
                gap="8"
                className={classNames(cls.commentCard, {}, [className, cls.loading])}
            >
                <div className={cls.header}>
                    <Skeleton
                        width={40}
                        height={40}
                        border="50%"
                    />
                    <Skeleton
                        height={16}
                        width={100}
                        className={cls.username}
                    />
                </div>
                <Skeleton
                    width="100%"
                    height={50}
                    className={cls.text}
                />
            </VStack>
        );

    }

    if (!comment) {

        return (
            null
        );

    }

    return (
        <VStack
            gap="8"
            max
            className={classNames(cls.commentCard, {}, [className])}
        >
            <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={cls.header}>
                {
                    comment.user.avatar
                    && (
                        <Avatar
                            src={comment.user.avatar}
                            size={40}
                        />
                    )
                }
                <Text
                    className={cls.username}
                    title={comment.user.username}
                />
            </AppLink>
            <Text className={cls.text} text={comment.text} />
        </VStack>
    );

});
