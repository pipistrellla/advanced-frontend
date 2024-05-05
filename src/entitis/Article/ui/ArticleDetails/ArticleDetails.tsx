import { FC, memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text';
import { TextAlign } from 'shared/ui/Text/ui/Text';
import { Skeleton } from 'shared/ui/Skeleton';
import { fetchArticleById } from '../../../Article/model/services/fetchArticleById/fetchArticleById';
import { articleDetailReducer } from '../../../Article/model/slice/articleDetailSlice';
import cls from './ArticleDetails.module.scss';
import {
    getArticleDetailsError,
    getArticleDetailsIsLoading,
    getArticleDetailsData,
} from '../../model/selectors/articleDetails';

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
    const data = useSelector(getArticleDetailsData);

    useEffect(() => {

        dispatch(fetchArticleById(id));

    }, [dispatch, id]);

    let content;

    if (isLoading) {

        content = (
            <div>
                <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </div>
        );

    } else if (error) {

        content = (
            <div>
                <Text
                    align={TextAlign.CENTER}
                    title={t('ошибка при загрузке статьи')}
                    theme={TextTheme.ERROR}
                />
            </div>
        );

    } else {

        content = (
            <div>
                <Text
                    title="Article details"
                />
            </div>
        );

    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAFterUnmount>
            <div className={classNames(cls.articleDetails, {}, [className])}>
                {content}
            </div>

        </DynamicModuleLoader>

    );

});
