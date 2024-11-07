import { FC, useState } from 'react';

import { useTranslation } from 'react-i18next';

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
                {/* eslint-disable-next-line max-len */}
                {/* <TextArea value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aspernatur omnis quia voluptates laborum provident impedit exercitationem a molestias quas aut, cupiditate ipsam ipsum labore quaerat porro sapiente quasi non A nulla sapiente cupiditate tempore laudantium! Quia iste maiores soluta nesciunt exercitationem magnam. Eveniet ullam, esse, incidunt soluta nesciunt, delectus quae aliquid earum rem magni necessitatibus modi facere qui vitae.Est delectus sit quo, accusamus ipsa vitae et libero odio sint cum recusandae veritatis esse sequi rerum iste facere, ab rem perferendis asperiores possimus reiciendis facilis! Omnis cupiditate quam ex. Aliquam distinctio officiis vitae quibusdam minima nemo repellendus dolores esse ipsa officia beatae, obcaecati commodi maxime culpa consequatur quis assumenda! Maxime hic sit modi necessitatibus recusandae quasi! Aspernatur, dolore reiciendis?" /> */}
            </VStack>
        </Page>
    );
};

export default MainPage;
