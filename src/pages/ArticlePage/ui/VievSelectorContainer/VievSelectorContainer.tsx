import React, { FC, memo } from 'react';

import { useTranslation } from 'react-i18next';

import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';

import { useArticleFilter } from '../../lib/hooks/useArticleFilter';

interface VievSelectorContainerProps {
    className?: string;
}

export const VievSelectorContainer: FC<VievSelectorContainerProps> = memo(
    (props) => {
        const { className } = props;
        const { t } = useTranslation();

        const { onClickChangeView, view } = useArticleFilter();

        return (
            <ArticleViewSelector
                className={classNames('', {}, [className])}
                view={view}
                onCLickView={onClickChangeView}
            />
        );
    },
);
