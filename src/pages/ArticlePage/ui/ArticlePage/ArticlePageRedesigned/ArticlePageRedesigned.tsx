import { FC, memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

import { ArticlePageGreetings } from '@/features/articlePageGreetings';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import DynamicModuleLoader, {
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from '@/widgets/Page';

import { fetchNextArticlePage } from '../../../model/services/fetchNextArticlePage/fetchNextArticlePage';
import { initArticlesPage } from '../../../model/services/initArticlesPage/initArticlesPage';
import { articlePageReducer } from '../../../model/slices/articlePageSlice';
import { ArticleInfiniteList } from '../../ArticleInfiniteList/ArticleInfiniteList';
import { FilterContainer } from '../../FilterContainer/FilterContainer';
import { VievSelectorContainer } from '../../VievSelectorContainer/VievSelectorContainer';
import cls from '../ArticlePage.module.scss';

interface ArticlePageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlePage: articlePageReducer,
};

const ArticlePageRedesigned: FC<ArticlePageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchNextArticlePage());
        }
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    return (
        <DynamicModuleLoader reducers={reducers} removeAFterUnmount={false}>
            <StickyContentLayout
                left={<VievSelectorContainer />}
                content={
                    <Page
                        data-testid="ArticlesPage"
                        onScrollEnd={onLoadNextPart}
                        className={classNames(cls.articlePageRedesigned, {}, [
                            className,
                        ])}
                    >
                        <ArticlePageGreetings />
                        <ArticleInfiniteList className={cls.list} />
                    </Page>
                }
                right={<FilterContainer />}
            />
        </DynamicModuleLoader>
    );
};

export default memo(ArticlePageRedesigned);
