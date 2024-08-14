import React, { FC, memo } from 'react';

import { ArticleView } from '@/entitis/Article';
import { ToggleFeaturesComponent } from '@/shared/lib/features';

import { ArticleViewSelectorDeprecated } from './ArticleViewSelectorDeprecated/ArticleViewSelectorDeprecated';
import { ArticleViewSelectorRedesigned } from './ArticleViewSelectorRedesigned/ArticleViewSelectorRedesigned';

export interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onCLickView: (view: ArticleView) => void;
}

export const ArticleViewSelector: FC<ArticleViewSelectorProps> = memo(
    (props: ArticleViewSelectorProps) => (
        <ToggleFeaturesComponent
            feature="isAppRedesigned"
            off={<ArticleViewSelectorDeprecated {...props} />}
            on={<ArticleViewSelectorRedesigned {...props} />}
        />
    ),
);
