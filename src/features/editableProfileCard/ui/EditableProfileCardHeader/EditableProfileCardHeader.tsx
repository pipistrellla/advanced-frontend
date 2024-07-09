import React, { FC, memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entitis/User';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';

interface EditableProfileCardHeaderProps {
className?: string;
}

export const EditableProfileCardHeader: FC<EditableProfileCardHeaderProps> = memo((props) => {

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
        <HStack
            justify="between"
            className={classNames('', {}, [className])}
            max
        >
            <Text title={t('Профиль пользователя')} />
            {canEdit
            && (
                <div>
                    {readonly
                        ? (
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                onClick={onEdit}
                                data-testid="EditableProfileCardHeader.EditButton"
                            >
                                {t('Редактировать')}
                            </Button>
                        )
                        : (
                            <HStack
                                gap="8"
                            >
                                <Button
                                    theme={ButtonTheme.OUTLINE_RED}
                                    onClick={onCancelEdit}
                                    data-testid="EditableProfileCardHeader.CancelButton"
                                >
                                    {t('Отменить')}
                                </Button>
                                <Button
                                    theme={ButtonTheme.OUTLINE}
                                    onClick={onSave}
                                    data-testid="EditableProfileCardHeader.SaveButton"
                                >
                                    {t('Сохранить')}
                                </Button>

                            </HStack>

                        )}
                </div>
            )}

        </HStack>
    );

});
