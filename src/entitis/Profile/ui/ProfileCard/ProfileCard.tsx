import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entitis/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileError } from 'entitis/Profile/model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from 'entitis/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import { Text } from 'shared/ui/Text';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import Input from 'shared/ui/Input/ui/Input';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {

    const { className } = props;
    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isloading = useSelector(getProfileIsLoading);

    const { t } = useTranslation('profile');

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Профиль пользователя')} />
                <Button
                    theme={ButtonTheme.OUTLINE}
                    className={cls.editBtn}
                >
                    {t('Редактировать')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Ваше Фамилия')}
                    className={cls.input}
                />
            </div>

        </div>
    );

};
