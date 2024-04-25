import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ProfileCard, fetchProfileData, profileReducer } from 'entitis/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ProfilePage.module.scss';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string
}

const ProfilePage: FC<ProfilePageProps> = (props) => {

    const { className } = props;
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    useEffect(() => {

        dispatch(fetchProfileData());

    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAFterUnmount>
            <div>
                {t('Профиль пользователя')}
                <ProfileCard />
            </div>
        </DynamicModuleLoader>
    );

};

export default ProfilePage;
