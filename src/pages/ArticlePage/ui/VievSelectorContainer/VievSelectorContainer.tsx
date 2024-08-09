import React, { FC, memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { ArticleView } from '@/entitis/Article';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

import cls from './VievSelectorContainer.module.scss';
import { getArticlePageView } from '../../model/selectors/articlesPageSelectors';
import { articlePageActions } from '../../model/slices/articlePageSlice';

interface VievSelectorContainerProps {
    className?: string;
}

export const VievSelectorContainer: FC<VievSelectorContainerProps> = memo(
    (props) => {
        const { className } = props;
        const { t } = useTranslation();
        const dispatch = useAppDispatch();
        const view = useSelector(getArticlePageView);

        const onClickChangeView = useCallback(
            (view: ArticleView) => {
                dispatch(articlePageActions.setView(view));
            },
            [dispatch],
        );

        return (
            <ArticleViewSelector
                className={classNames(cls.vievSelectorContainer, {}, [
                    className,
                ])}
                view={view}
                onCLickView={onClickChangeView}
            />
        );
    },
);
