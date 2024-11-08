import React, { FC, memo, ReactNode } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
    ArticleBlocksOption,
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
    renderBlock,
} from '@/entitis/Article';
import { FieldWithMovebleObjects } from '@/features/FieldWithMovebleObjects';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Page } from '@/widgets/Page';

import { ArticleEditHeader } from '../ArticleEditHeader/ArticleEditHeader';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage: FC<ArticleEditPageProps> = memo((props) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);

    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const article = useSelector(getArticleDetailsData);

    const renderedBlocks: ReactNode[] =
        article?.blocks.map((block) => renderBlock(block)) ?? [];

    // todo разобраться с сохранением редактирования статьи
    // возможно добавить сохранение в LS
    // разобраться как сделать редактируемыми блоки у статей
    return (
        <Page className={classNames('', {}, [className])}>
            {isEdit
                ? t('Редактирование статьи с ID = ') + id
                : t('Создание новой статьи')}
            <ArticleEditHeader />
            <FieldWithMovebleObjects
                data={renderedBlocks}
                options={ArticleBlocksOption}
            />
        </Page>
    );
});

export default ArticleEditPage;
