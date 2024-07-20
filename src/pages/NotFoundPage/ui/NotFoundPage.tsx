import React, { FC } from 'react';

import { useTranslation } from 'react-i18next';

import { Text, TextTheme } from '@/shared/ui/Text';
import { Page } from '@/widgets/Page';

import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {}

export const NotFoundPage: FC<NotFoundPageProps> = () => {
    const { t } = useTranslation('notFoundPage');

    return (
        <Page data-testid="NotFoundPage">
            <Text
                theme={TextTheme.ERROR}
                title={t('Страница не найдена')}
                className={cls.NotFoundPage}
            />
        </Page>
    );
};
