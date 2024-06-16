import React, {
    FC, memo, useCallback, useMemo,
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { TabItem, Tabs } from '@/shared/ui/Tabs';
import { ArticleType } from '../../model/consts/consts';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void
}

export const ArticleTypeTabs: FC<ArticleTypeTabsProps> = memo((props:ArticleTypeTabsProps) => {

    const {
        className,
        value,
        onChangeType,
    } = props;
    const { t } = useTranslation('article');

    const onClickChangeType = useCallback((tab: TabItem) => {

        onChangeType(tab.value as ArticleType);

    }, [onChangeType]);

    const typeTabs = useMemo<TabItem[]>(() => [
        {
            value: ArticleType.ALL,
            content: t('Все'),
        },
        {
            value: ArticleType.IT,
            content: t('Айти'),
        },
        {
            value: ArticleType.ECONOMICS,
            content: t('Экономика'),
        },
        {
            value: ArticleType.SCIENCE,
            content: t('Наука'),
        },
    ], [t]);

    return (
        <Tabs
            tabs={typeTabs}
            value={value}
            onTabClick={onClickChangeType}
            className={classNames('', {}, [className])}
        />
    );

});
