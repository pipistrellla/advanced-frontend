import React, { FC, useCallback } from 'react';
import { t } from 'i18next';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import { Text } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import {
    getProfileData, getProfileReadonly, profileActions, updateProfileData,
} from 'entitis/Profile';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entitis/User';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?:string
}

const ProfilePageHeader: FC<ProfilePageHeaderProps> = (props) => {

    const { t } = useTranslation('profile');

    const { className } = props;
    const readonly = useSelector(getProfileReadonly);
    // если используется много селекторов, мжно сделать отдльный счелектор
    // и в нем через реселектор вернуть результат проверки
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;

    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {

        dispatch(profileActions.setReadonly(false));

    }, [dispatch]);

    const onCancelEdit = useCallback(() => {

        dispatch(profileActions.cancelEdit());

    }, [dispatch]);

    const onSave = useCallback(() => {

        dispatch(updateProfileData());

    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Профиль пользователя')} />
            {canEdit
            && (
                <div className={cls.btnsWrapper}>
                    {readonly
                        ? (
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                className={cls.editBtn}
                                onClick={onEdit}
                            >
                                {t('Редактировать')}
                            </Button>
                        )
                        : (
                            <>
                                <Button
                                    theme={ButtonTheme.OUTLINE_RED}
                                    className={cls.editBtn}
                                    onClick={onCancelEdit}
                                >
                                    {t('Отменить')}
                                </Button>
                                <Button
                                    theme={ButtonTheme.OUTLINE}
                                    className={cls.saveBtn}
                                    onClick={onSave}
                                >
                                    {t('Сохранить')}
                                </Button>

                            </>

                        )}
                </div>
            )}

        </div>
    );

};

export default ProfilePageHeader;
