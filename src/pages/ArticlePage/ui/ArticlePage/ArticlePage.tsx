import { FC, memo } from 'react';

import DynamicModuleLoader, {
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeaturesComponent } from '@/shared/lib/features';

import ArticlePageDeprecated from './ArticlePageDeprecated/ArticlePageDeprecated';
import ArticlePageRedesigned from './ArticlePageRedesigned/ArticlePageRedesigned';
import { articlePageReducer } from '../../model/slices/articlePageSlice';

interface ArticlePageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlePage: articlePageReducer,
};

const ArticlePage: FC<ArticlePageProps> = (props) => {
    const { className } = props;

    return (
        <DynamicModuleLoader reducers={reducers} removeAFterUnmount={false}>
            <ToggleFeaturesComponent
                feature="isAppRedesigned"
                off={<ArticlePageDeprecated />}
                on={<ArticlePageRedesigned />}
            />
        </DynamicModuleLoader>
    );
};

export default memo(ArticlePage);
