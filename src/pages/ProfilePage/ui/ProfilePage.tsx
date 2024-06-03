import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';
import VStack from 'shared/ui/Stack/VStack/VStack';
import { EditableProfileCard } from 'features/editableProfileCard';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text';

interface ProfilePageProps {
    className?: string
}

const ProfilePage: FC<ProfilePageProps> = (props) => {

    const { className } = props;
    const { t } = useTranslation('profile');
    const { id } = useParams<{id:string}>();

    if (!id)
        return <Text text={t('Произошла ошибка при загрузке профиля')} />;

    return (
        <Page>
            <VStack
                max
                gap="16"
            >
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );

};

export default ProfilePage;
