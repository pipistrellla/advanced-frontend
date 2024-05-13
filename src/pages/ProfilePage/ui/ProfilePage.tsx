import React, { FC, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    ProfileCard,
    ValidateProfileError,
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileValidateError,
    profileActions,
    profileReducer,
} from 'entitis/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Currency } from 'entitis/Currency';
import { Country } from 'entitis/Country';
import { Text, TextTheme } from 'shared/ui/Text';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useParams } from 'react-router-dom';
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
    const validateErrors = useSelector(getProfileValidateError);
    const { id } = useParams<{id:string}>();

    const ValidateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка при сохранении'),
        [ValidateProfileError.INCORRECT_SECONDARY_DATA]: t('Страна, город и валюта обязательны'),
        [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны'),
        [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
    };

    useInitialEffect(() => {

        if (id)
            dispatch(fetchProfileData(id));

    });

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

    const onChangeCurrency = useCallback((currency?: Currency) => {

        dispatch(profileActions.updateProfile({ currency }));

    }, [dispatch]);

    const onChangeCountry = useCallback((country?: Country) => {

        dispatch(profileActions.updateProfile({ country }));

    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAFterUnmount>
            <div>
                <ProfilePageHeader />
                {validateErrors?.length && validateErrors.map((err) => (
                    <Text
                        theme={TextTheme.ERROR}
                        text={ValidateErrorTranslates[err]}
                        key={err}
                    />
                ))}
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
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </div>
        </DynamicModuleLoader>
    );

};

export default ProfilePage;
