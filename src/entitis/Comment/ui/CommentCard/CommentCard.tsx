import React, { FC, memo } from 'react';
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import { Avatar } from 'shared/ui/Avatar';
import { Text } from 'shared/ui/Text';
import { Skeleton } from 'shared/ui/Skeleton';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';

interface CommentCardProps {
    className?: string;
    comment: Comment
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
            <div className={classNames(cls.commentCard, {}, [className])}>
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
            </div>
        );

    }

    return (
        <div className={classNames(cls.commentCard, {}, [className])}>
            <div className={cls.header}>
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
            </div>
            <Text className={cls.text} text={comment.text} />
        </div>
    );

});
