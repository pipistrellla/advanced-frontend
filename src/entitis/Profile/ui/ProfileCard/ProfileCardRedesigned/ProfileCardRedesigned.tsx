import React, { FC } from 'react';

import { useTranslation } from 'react-i18next';

import { CountrySelect } from '@/entitis/Country';
import { CurrencySelect } from '@/entitis/Currency';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Card } from '@/shared/ui/redesigned/Card';
import Input from '@/shared/ui/redesigned/Input/ui/Input';
import { Text } from '@/shared/ui/redesigned/Text';
import { HStack, VStack } from '@/shared/ui/Stack';

import { ProfileCardProps } from '../ProfileCard';
import cls from '../ProfileCard.module.scss';
import { ProfileCardRedesignedSkeleton } from '../ProfileCardSkeleton/ProfileCardSkelton';

export const ProfileCardRedesigned: FC<ProfileCardProps> = (props) => {
    const {
        className,
        data,
        error,
        isLoading,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeUsername,
        onChangeCountry,
        onChangeCurrency,
    } = props;

    const { t } = useTranslation('profile');

    if (isLoading) {
        return <ProfileCardRedesignedSkeleton />;
    }

    if (error) {
        return (
            <HStack justify="center" max>
                <Text
                    variant="error"
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте перезагрузить страницу')}
                    align="center"
                />
            </HStack>
        );
    }

    return (
        <Card
            padding="24"
            max
            className={classNames(cls.ProfileCardRedesigned, {}, [className])}
        >
            <VStack max gap="32">
                <HStack justify="center" max>
                    <Avatar src={data?.avatar} alt="000" size={128} />
                </HStack>

                <HStack gap="24" max>
                    <VStack gap="16" max>
                        <Input
                            value={data?.first}
                            label={t('Имя')}
                            onChange={onChangeFirstname}
                            readonly={readonly}
                            data-testid="ProfileCard.firstname"
                        />
                        <Input
                            value={data?.lastname}
                            label={t('Фамилия')}
                            onChange={onChangeLastname}
                            readonly={readonly}
                            data-testid="ProfileCard.lastname"
                        />
                        <Input
                            value={data?.age}
                            label={t('Возраст')}
                            onChange={onChangeAge}
                            readonly={readonly}
                        />
                        <Input
                            value={data?.city}
                            label={t('Город')}
                            onChange={onChangeCity}
                            readonly={readonly}
                        />
                    </VStack>
                    <VStack gap="16" max>
                        <Input
                            value={data?.username}
                            label={t('Имя пользователя')}
                            onChange={onChangeUsername}
                            readonly={readonly}
                        />
                        <Input
                            value={data?.avatar}
                            label={t('Аватар')}
                            onChange={onChangeAvatar}
                            readonly={readonly}
                        />
                        <CurrencySelect
                            value={data?.currency}
                            onChange={onChangeCurrency}
                            readonly={readonly}
                        />
                        <CountrySelect
                            value={data?.country}
                            onChange={onChangeCountry}
                            readonly={readonly}
                        />
                    </VStack>{' '}
                </HStack>
            </VStack>
        </Card>
    );
};
