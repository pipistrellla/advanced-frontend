import React, { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import { Text } from 'shared/ui/Text';
import { CommentList } from 'entitis/Comment';
import { AddCommentForm } from 'features/AddCommentForm';
import { TextSize } from 'shared/ui/Text/ui/Text';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { addCommentFormArticle } from '../../model/services/addCommentFormArticle/addCommentFormArticle';
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading, getArticleCommentsError } from '../../model/selectors/comments';
import cls from './ArticleDetailsComments.module.scss';

interface ArticleDetailsCommentsProps {
    className?: string;
    id: string
}

export const ArticleDetailsComments: FC<ArticleDetailsCommentsProps> = memo((props: ArticleDetailsCommentsProps) => {

    const { className, id } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const comments = useSelector(getArticleComments.selectAll);
    const commentIsLoading = useSelector(getArticleCommentsIsLoading);
    const commentError = useSelector(getArticleCommentsError);

    const onSendComment = useCallback((text: string) => {

        dispatch(addCommentFormArticle(text));

    }, [dispatch]);

    useInitialEffect(() => {

        dispatch(fetchCommentsByArticleId(id));

    });

    return (
        <div className={classNames(cls.articleDetailsComments, {}, [className])}>
            <Text
                size={TextSize.L}
                className={cls.commentTitle}
                title={t('Комментарии')}
            />
            <AddCommentForm
                onSendComment={onSendComment}
            />
            <CommentList
                comments={comments}
                isLoading={commentIsLoading}
            />
        </div>
    );

});
