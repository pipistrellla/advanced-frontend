import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import { Text, TextTheme } from 'shared/ui/Text';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import Input from 'shared/ui/Input/ui/Input';
import { Loader } from 'shared/ui/Loader';
import { text } from 'stream/consumers';
import { TextAlign } from 'shared/ui/Text/ui/Text';
import cls from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';

interface ProfileCardProps {
    className?: string
    data?: Profile
    error?: string
    isLoading?: boolean
    onChangeLastname: (value:string) => void
    onChangeFirstname: (value:string) => void
    onChangeCity: (value:string) => void
    onChangeAge: (value: string) => void
    readonly?: boolean
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {

    const {
        className,
        data,
        error,
        isLoading,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        readonly,
    } = props;

    const { t } = useTranslation('profile');

    if (isLoading) {

        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader />
            </div>
        );

    }

    if (error) {

        return (
            <div className={classNames(cls.ProfileCard, { }, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте перезагрузить страницу')}
                    align={TextAlign.CENTER}
                />
            </div>
        );

    }

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.data}>
                <Input
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                    onChange={onChangeFirstname}
                    readonly={readonly}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    className={cls.input}
                    onChange={onChangeLastname}
                    readonly={readonly}
                />
                <Input
                    value={data?.age}
                    placeholder={t('Ваш возраст')}
                    className={cls.input}
                    onChange={onChangeAge}
                    readonly={readonly}
                />
                <Input
                    value={data?.city}
                    placeholder={t('Ваш город')}
                    className={cls.input}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
            </div>

        </div>
    );

};
