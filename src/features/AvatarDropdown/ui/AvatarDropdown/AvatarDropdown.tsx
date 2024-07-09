import React, { FC, memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from '@/entitis/User';
import { RoutePath } from '@/shared/const/router';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar } from '@/shared/ui/Avatar';
import { DropdownItem, Dropdown } from '@/shared/ui/Popups';

interface AvatarDropdownProps {
className?: string;
}

export const AvatarDropdown: FC<AvatarDropdownProps> = memo((props) => {

    const { className } = props;
    const { t } = useTranslation('navbar');

    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const authData = useSelector(getUserAuthData);
    const dispatch = useAppDispatch();
    const isAdminPanelAvailable = isAdmin || isManager;

    const onLogOut = useCallback(() => {

        dispatch(userActions.logout());

    }, [dispatch]);

    const dropdownItems:DropdownItem[] = authData?.id
        ? [
            ...(isAdminPanelAvailable
                ? [{
                    content: t('Админка'),
                    href: RoutePath.admin_panel,
                }]
                : []),
            {
                content: t('Профиль'),
                href: RoutePath.profile + authData.id,
            },
            {
                content: t('Выйти'),
                onClick: onLogOut,
            },
        ]
        : [];

    if (!authData)
        return null;

    return (
        <Dropdown
            className={classNames('', {}, [className])}
            direction="bottom left"
            items={dropdownItems}
            trigger={(
                <Avatar
                    size={30}
                    src={authData.avatar}
                />
            )}
        />
    );

});
