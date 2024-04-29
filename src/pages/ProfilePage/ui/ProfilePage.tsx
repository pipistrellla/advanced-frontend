import React, { FC, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    ProfileCard,
    fetchProfileData,
    getProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    profileActions,
    profileReducer,
} from 'entitis/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import cls from './ProfilePage.module.scss';
import ProfilePageHeader from './ProfilePageHeader/ProfilePageHeader';

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
    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadonly);

    useEffect(() => {

        dispatch(fetchProfileData());

    }, [dispatch]);

    const onChangeFirstname = useCallback((value?: string) => {

        dispatch(profileActions.updateProfile({ first: value || '' }));

    }, [dispatch]);

    const onChangeLastname = useCallback((value?: string) => {

        dispatch(profileActions.updateProfile({ lastname: value || '' }));

    }, [dispatch]);

    const onChangeCity = useCallback((value?: string) => {

        dispatch(profileActions.updateProfile({ city: value || '' }));

    }, [dispatch]);

    const onChangeAge = useCallback((value?: string) => {

        dispatch(profileActions.updateProfile({ age: Number(value?.replace(/\D/gi, '') || 0) }));

    }, [dispatch]);

    const onChangeAvatar = useCallback((value?: string) => {

        dispatch(profileActions.updateProfile({ avatar: value || '' }));

    }, [dispatch]);

    const onChangeUsername = useCallback((value?: string) => {

        dispatch(profileActions.updateProfile({ username: value || '' }));

    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAFterUnmount>
            <div>
                <ProfilePageHeader />
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    readonly={readonly}
                    onChangeAvatar={onChangeAvatar}
                    onChangeUsername={onChangeUsername}
                />
            </div>
        </DynamicModuleLoader>
    );

};

export default ProfilePage;
