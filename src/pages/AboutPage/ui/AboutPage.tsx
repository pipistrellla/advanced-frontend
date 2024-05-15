import { Counter } from 'entitis/Counter';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page';
import { Text } from 'shared/ui/Text';

interface AboutPageProps {

}

const AboutPage: FC<AboutPageProps> = () => {

    const { t } = useTranslation('about');
    return (
        <Page>
            <Text text={t('О сайте')} />
            <Text text={t('Привет мир!!!')} />
        </Page>
    );

};

export default AboutPage;
