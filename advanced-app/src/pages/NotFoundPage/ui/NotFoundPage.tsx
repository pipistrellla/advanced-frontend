import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {

}

export const NotFoundPage: FC<NotFoundPageProps> = () => {

    const { t } = useTranslation('notFoundPage');

    return (
        <div className={cls.NotFoundPage}>
            {t('Страница не найдена')}
        </div>
    );

};
