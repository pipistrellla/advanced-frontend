import { FC, memo } from 'react';

import { useTranslation } from 'react-i18next';

import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Card } from '@/shared/ui/deprecated/Card';
import Input from '@/shared/ui/deprecated/Input/ui/Input';

import cls from './ArticlePageFilters.module.scss';
import { useArticleFilter } from '../../lib/hooks/useArticleFilter';

interface ArticlePageFiltersProps {
    className?: string;
}

export const ArticlePageFilters: FC<ArticlePageFiltersProps> = memo((props) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();

    const {
        onClickChangeOrder,
        onClickChangeSearch,
        onClickChangeSort,
        onClickChangeType,
        onClickChangeView,
        order,
        search,
        sort,
        type,
        view,
    } = useArticleFilter();

    return (
        <div className={classNames(cls.articlePageFilters, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeOrder={onClickChangeOrder}
                    onChangeSort={onClickChangeSort}
                />
                <ArticleViewSelector
                    view={view}
                    onCLickView={onClickChangeView}
                />
            </div>
            <Card className={cls.search}>
                <Input
                    onChange={onClickChangeSearch}
                    value={search}
                    placeholder={t('Поиск')}
                />
            </Card>
            <ArticleTypeTabs
                className={cls.tabs}
                value={type}
                onChangeType={onClickChangeType}
            />
        </div>
    );
});
