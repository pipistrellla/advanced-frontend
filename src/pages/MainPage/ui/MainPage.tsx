import { Counter } from 'entitis/Counter';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'widgets/PageError';

interface MainPageProps {

}

const MainPage: FC<MainPageProps> = () => {

    const { t } = useTranslation('main');
    return (
        <div>
            {t('Главная страница')}
            <Counter />
            <BugButton />
        </div>
    );

};

export default MainPage;
