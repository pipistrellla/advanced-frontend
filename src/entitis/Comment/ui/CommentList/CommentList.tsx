import React, { FC, memo } from 'react';
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import { Text } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { Comment } from '../../model/types/comment';
import cls from './CommentList.module.scss';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
    className?: string;
    comments?: Comment[]
    isLoading?: boolean
}

export const CommentList: FC<CommentListProps> = memo((props) => {

    const {
        className,
        comments,
        isLoading,
    } = props;

    const { t } = useTranslation('article');

    return (
        <div className={classNames(cls.commentList, {}, [className])}>
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard
                        className={cls.comment}
                        comment={comment}
                        isLoading={isLoading}
                    />
                ))
                : <Text text={t('Комментарии отсутствуют')} />}
        </div>
    );

});
