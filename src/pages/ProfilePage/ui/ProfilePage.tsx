import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entitis/Profile';
import cls from './ProfilePage.module.scss';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {

}

const ProfilePage: FC<ProfilePageProps> = (props) => {

    const { ...a } = props;
    const { t } = useTranslation('profile');
    return (
        <DynamicModuleLoader reducers={reducers} removeAFterUnmount>
            <div>
                {t('Профиль пользователя')}
            </div>
        </DynamicModuleLoader>
    );

};

export default ProfilePage;
