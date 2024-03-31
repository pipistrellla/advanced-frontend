import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import { Button } from 'shared/ui/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string
}

const PageError: FC<PageErrorProps> = ({ className }) => {

    const { t } = useTranslation('PageError');

    const reloadPage = () => {

        // eslint-disable-next-line no-restricted-globals
        location.reload();

    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('Произошла непридвиденная Ошибка')}</p>
            <Button onClick={() => reloadPage()}>{t('Обновить страницу')}</Button>
        </div>
    );

};

export default PageError;
