import React, { FC, memo } from 'react';

import { ArticleView } from '@/entitis/Article';
import { ToggleFeaturesComponent } from '@/shared/lib/features';

import { ArticleViewSelectorDeprecated } from './ArticleViewSelectorDeprecated/ArticleViewSelectorDeprecated';
import { ArticleViewSelectorRedesigned } from './ArticleViewSelectorRedesigned/ArticleViewSelectorRedesigned';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onCLickView: (view: ArticleView) => void;
}

export const ArticleViewSelector: FC<ArticleViewSelectorProps> = memo(
    (props: ArticleViewSelectorProps) => {
        const { className, onCLickView, view } = props;

        return (
            <ToggleFeaturesComponent
                feature="isAppRedesigned"
                off={
                    <ArticleViewSelectorDeprecated
                        className={className}
                        onCLickView={onCLickView}
                        view={view}
                    />
                }
                on={
                    <ArticleViewSelectorRedesigned
                        className={className}
                        onCLickView={onCLickView}
                        view={view}
                    />
                }
            />
        );
    },
);
