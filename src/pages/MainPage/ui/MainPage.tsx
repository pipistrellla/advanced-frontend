import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Text } from '@/shared/ui/Text';
import { BugButton } from '@/widgets/PageError';
import { StarRating } from '@/shared/ui/StarRating';
import { VStack } from '@/shared/ui/Stack';
import { RatingCard } from '@/entitis/Rating';

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
            <VStack gap="32">
                <Text text={t('Главная страница')} />
                <BugButton />
            </VStack>
        </Page>
    );

};

export default MainPage;
