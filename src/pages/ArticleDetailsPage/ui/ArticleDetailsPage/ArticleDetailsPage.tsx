import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import { ArticleDetails } from 'entitis/Article';
import { useParams } from 'react-router-dom';
import { Text, TextTheme } from 'shared/ui/Text';
import { CommentList } from 'entitis/Comment';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from 'features/AddCommentForm';
import {
    fetchCommentsByArticleId,
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {
    addCommentFormArticle,
} from '../../model/services/addCommentFormArticle/addCommentFormArticle';
import {
    getArticleCommentsError,
    getArticleCommentsIsLoading,
} from '../../model/selectors/comments';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers : ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {

    const { className } = props;
    const { t } = useTranslation('article');
    const { id } = useParams<{id:string}>();
    const comments = useSelector(getArticleComments.selectAll);
    const commentIsLoading = useSelector(getArticleCommentsIsLoading);
    const commentError = useSelector(getArticleCommentsError);
    const dispatch = useAppDispatch();

    const onSendComment = useCallback((text: string) => {

        dispatch(addCommentFormArticle(text));

    }, [dispatch]);

    useInitialEffect(() => {

        dispatch(fetchCommentsByArticleId(id));

    });

    if (!id) {

        return (
            <div className={classNames(cls.articleDetailsPage, {}, [className])}>
                <Text title={t('Cтатья не найдена')} theme={TextTheme.ERROR} />
            </div>
        );

    }
    return (
        <DynamicModuleLoader
            removeAFterUnmount
            reducers={reducers}
        >
            <div className={classNames(cls.articleDetailsPage, {}, [className])}>
                <ArticleDetails id={id} />
                <Text className={cls.commentTitle} title={t('Комментарии')} />
                <AddCommentForm
                    onSendComment={onSendComment}
                />
                <CommentList
                    comments={comments}
                    isLoading={commentIsLoading}
                />
            </div>
        </DynamicModuleLoader>
    );

};

export default memo(ArticleDetailsPage);
