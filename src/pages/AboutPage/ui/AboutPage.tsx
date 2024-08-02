import { FC } from 'react';

import { useTranslation } from 'react-i18next';

import { Text } from '@/shared/ui/deprecated/Text';
import { Page } from '@/widgets/Page';

interface AboutPageProps {}

const AboutPage: FC<AboutPageProps> = () => {
    const { t } = useTranslation('about');
    return (
        <Page data-testid="AboutPage">
            <Text text={t('О сайте')} />
            <Text text={t('Привет мир!!!')} />
        </Page>
    );
};

export default AboutPage;
