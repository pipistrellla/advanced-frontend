import React, { FC, memo } from 'react';

import { ArticleView } from '@/entitis/Article';
import ListIcon from '@/shared/assets/icons/burger.svg';
import TiledIcon from '@/shared/assets/icons/tile.svg';
import { ToggleFeaturesComponent } from '@/shared/lib/features';

import { ArticleViewSelectorDeprecated } from './ArticleViewSelectorDeprecated/ArticleViewSelectorDeprecated';
import { ArticleViewSelectorRedesigned } from './ArticleViewSelectorRedesigned/ArticleViewSelectorRedesigned';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onCLickView: (view: ArticleView) => void;
}

const viewsType = [
    {
        view: ArticleView.SMALL,
        icon: TiledIcon,
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
];

export const ArticleViewSelector: FC<ArticleViewSelectorProps> = memo(
    (props: ArticleViewSelectorProps) => {
        const { className, onCLickView, view } = props;

        return (
            <ToggleFeaturesComponent
                feature="isAppRedesigned"
                off={
                    <ArticleViewSelectorDeprecated
                        onCLickView={onClick}
                        view={view}
                    />
                }
                on={
                    <ArticleViewSelectorRedesigned
                        onCLickView={onClick}
                        view={view}
                    />
                }
            />
        );
    },
);
