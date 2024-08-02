import { FC, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { Text } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';
import { BugButton } from '@/widgets/PageError';

interface MainPageProps {}

const MainPage: FC<MainPageProps> = () => {
    const { t } = useTranslation('main');
    const [value, setValue] = useState('');

    const onChangeInput = (val: string) => {
        setValue(val);
    };

    return (
        <Page data-testid="MainPage">
            <VStack gap="32">
                <Text text={t('Главная страница')} />
                <BugButton />
                <ThemeSwitcher />
            </VStack>
        </Page>
    );
};

export default MainPage;
