import React, { FC, memo } from 'react';

import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { FieldWithMovebleObjects } from '@/features/FieldWithMovebleObjects';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Page } from '@/widgets/Page';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage: FC<ArticleEditPageProps> = memo((props) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);

    return (
        <Page className={classNames('', {}, [className])}>
            {isEdit
                ? t('Редактирование статьи с ID = ') + id
                : t('Создание новой статьи')}
            <FieldWithMovebleObjects />
        </Page>
    );
});

export default ArticleEditPage;
