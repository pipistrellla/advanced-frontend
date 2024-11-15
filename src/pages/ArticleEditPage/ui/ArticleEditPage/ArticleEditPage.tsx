import React, { FC, memo, ReactNode, useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
    Article,
    ArticleBlocksOption,
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
    renderEditableBlock,
} from '@/entitis/Article';
import { FieldWithMovebleObjects } from '@/features/FieldWithMovebleObjects';
import { LOCAL_STORAGE_EDITED_ARTICLE } from '@/shared/const/localStorage';
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
    const article =
        useSelector(getArticleDetailsData) ??
        (JSON.parse(
            localStorage.getItem(LOCAL_STORAGE_EDITED_ARTICLE) || '',
        ) as Article);

    useEffect(() => {
        if (article) {
            localStorage.setItem(
                LOCAL_STORAGE_EDITED_ARTICLE,
                JSON.stringify(article),
            );
        }
    }, [article]);

    const renderedBlocks: ReactNode[] =
        article?.blocks.map((block) => renderEditableBlock(block)) ?? [];

    // todo разобраться с сохранением редактирования статьи если что переделать
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
