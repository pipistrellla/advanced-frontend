import { Counter } from 'entitis/Counter';
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Input from 'shared/ui/Input/ui/Input';
import { Page } from 'shared/ui/Page';
import { Text } from 'shared/ui/Text';
import { BugButton } from 'widgets/PageError';

interface MainPageProps {

}

const MainPage: FC<MainPageProps> = () => {

    const { t } = useTranslation('main');
    const [value, setValue] = useState('');

    const onChangeInput = (val:string) => {

        setValue(val);

    };

    return (
        <Page>
            <Text text={t('Главная страница')} />
            <BugButton />
        </Page>
    );

};

export default MainPage;
