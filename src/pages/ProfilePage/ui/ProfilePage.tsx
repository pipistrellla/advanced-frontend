import { FC } from 'react';

import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { EditableProfileCard } from '@/features/editableProfileCard';
import { Text } from '@/shared/ui/deprecated/Text';
import VStack from '@/shared/ui/Stack/VStack/VStack';
import { Page } from '@/widgets/Page';

interface ProfilePageProps {
    className?: string;
    testId?: string;
}

const ProfilePage: FC<ProfilePageProps> = (props) => {
    const { className, testId } = props;
    const { t } = useTranslation('profile');
    const { id } = useParams<{ id: string }>();

    if (!id && !testId) {
        return <Text text={t('Произошла ошибка при загрузке профиля')} />;
    }

    return (
        <Page data-testid="ProfilePage">
            <VStack max gap="16">
                <EditableProfileCard id={id!} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
