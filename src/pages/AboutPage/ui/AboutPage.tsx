import { Counter } from 'entitis/Counter';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';

interface AboutPageProps {

}

const AboutPage: FC<AboutPageProps> = () => {

    const { t } = useTranslation('about');
    return (
        <div>
            <Text text={t('О сайте')} />
            <Text text={t('Привет мир!!!')} />
        </div>
    );

};

export default AboutPage;
