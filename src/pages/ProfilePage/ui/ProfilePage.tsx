import { FC } from 'react';

import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { EditableProfileCard } from '@/features/editableProfileCard';
import VStack from '@/shared/ui/Stack/VStack/VStack';
import { Text } from '@/shared/ui/Text';
import { Page } from '@/widgets/Page';

interface ProfilePageProps {
    className?: string
    testId?: string
}

const ProfilePage: FC<ProfilePageProps> = (props) => {

    const {
        className,
        testId,
    } = props;
    const { t } = useTranslation('profile');
    const { id } = useParams<{id:string}>();

    if (!id && !testId)
        return <Text text={t('Произошла ошибка при загрузке профиля')} />;

    return (
        <Page>
            <VStack
                max
                gap="16"
            >
                <EditableProfileCard id={id!} />
            </VStack>
        </Page>
    );

};

export default ProfilePage;
