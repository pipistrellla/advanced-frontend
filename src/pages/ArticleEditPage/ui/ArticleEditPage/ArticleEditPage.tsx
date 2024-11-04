import React, { FC, memo } from 'react';

import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { FieldWithMovebleObjects } from '@/features/FieldWithMovebleObjects';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Card } from '@/shared/ui/deprecated/Card';
import { StarRating } from '@/shared/ui/redesigned/StarRating';
import { Text } from '@/shared/ui/redesigned/Text';
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
            <FieldWithMovebleObjects
                data={[
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit 1',
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit 2',
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit 3',
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit 4',
                ]}
                options={[<Card>1</Card>, <Text text="2" />, <StarRating />]}
            />
        </Page>
    );
});

export default ArticleEditPage;
