import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface AboutPageProps {

}

const AboutPage: FC<AboutPageProps> = () => {

    const { t } = useTranslation('about');
    return (
        <div>
            <div>{t('О сайте')}</div>
            <div>{t('Привет мир!!!')}</div>
        </div>
    );

};

export default AboutPage;