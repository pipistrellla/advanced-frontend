import React, {
    FC, Suspense, memo, useCallback,
} from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { CommentList } from '@/entitis/Comment';
import { AddCommentForm } from '@/features/AddCommentForm';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { VStack } from '@/shared/ui/Stack';
import { Text, TextSize } from '@/shared/ui/Text';

import { getArticleCommentsIsLoading, getArticleCommentsError } from '../../model/selectors/comments';
import { addCommentFormArticle } from '../../model/services/addCommentFormArticle/addCommentFormArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';

interface ArticleDetailsCommentsProps {
    className?: string;
    id: string
}

export const ArticleDetailsComments: FC<ArticleDetailsCommentsProps> = memo((props: ArticleDetailsCommentsProps) => {

    const { className, id } = props;
    const { t } = useTranslation('article');
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
        <VStack
            gap="16"
            max
            className={classNames('', {}, [className])}
        >
            <Text
                size={TextSize.L}
                title={t('Комментарии')}
            />
            <Suspense>
                <AddCommentForm
                    onSendComment={onSendComment}
                />
            </Suspense>
            <CommentList
                comments={comments}
                isLoading={commentIsLoading}
            />
        </VStack>
    );

});
