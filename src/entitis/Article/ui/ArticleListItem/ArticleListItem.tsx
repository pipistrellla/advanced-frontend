import { FC, HTMLAttributeAnchorTarget, memo } from 'react';

import { ToggleFeaturesComponent } from '@/shared/lib/features';

import { ArticleListItemDeprecated } from './ArticleListItemDeprecated/ArticleListItemDeprecated';
import { ArticleListItemRedesigned } from './ArticleListItemRedesigned/ArticleListItemRedesigned';
import { ArticleView } from '../../model/consts/consts';
import { Article } from '../../model/types/article';

export interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem: FC<ArticleListItemProps> = memo(
    (props: ArticleListItemProps) => (
        <ToggleFeaturesComponent
            feature="isAppRedesigned"
            on={<ArticleListItemRedesigned {...props} />}
            off={<ArticleListItemDeprecated {...props} />}
        />
    ),
);
