import { FC, memo } from 'react';

import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeaturesComponent } from '@/shared/lib/features';

import { ArticleDetailsDeprecated } from './ArticleDetailsDeprecated/ArticleDetailsDeprecated';
import { ArticleDetailsRedesigned } from './ArticleDetailsRedesigned/ArticleDetailsRedesigned';
import { articleDetailReducer } from '../../../Article/model/slice/articleDetailSlice';

export interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailReducer,
};
export const ArticleDetails: FC<ArticleDetailsProps> = memo(
    (props: ArticleDetailsProps) => (
        <ToggleFeaturesComponent
            feature="isAppRedesigned"
            off={<ArticleDetailsDeprecated {...props} />}
            on={<ArticleDetailsRedesigned {...props} />}
        />
    ),
);
