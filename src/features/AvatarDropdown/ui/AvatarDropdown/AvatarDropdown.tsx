import React, { FC, memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from '@/entitis/User';
import {
    getRouteAdminPanel,
    getRouteProfile,
    getRouteSettings,
} from '@/shared/const/router';
import { ToggleFeaturesComponent } from '@/shared/lib/features';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import {
    DropdownItem,
    Dropdown as DropdownDeprecated,
} from '@/shared/ui/deprecated/Popups';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Dropdown } from '@/shared/ui/redesigned/Popups';

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

    const dropdownItems: DropdownItem[] = authData?.id
        ? [
              ...(isAdminPanelAvailable
                  ? [
                        {
                            content: t('Админка'),
                            href: getRouteAdminPanel(),
                        },
                    ]
                  : []),
              {
                  content: t('Профиль'),
                  href: getRouteProfile(authData.id),
              },
              {
                  content: t('Настройки'),
                  href: getRouteSettings(),
              },
              {
                  content: t('Выйти'),
                  onClick: onLogOut,
              },
          ]
        : [];

    if (!authData) {
        return null;
    }

    return (
        <ToggleFeaturesComponent
            feature="isAppRedesigned"
            on={
                <Dropdown
                    className={classNames('', {}, [className])}
                    direction="bottom left"
                    items={dropdownItems}
                    trigger={<Avatar size={40} src={authData.avatar} />}
                />
            }
            off={
                <DropdownDeprecated
                    className={classNames('', {}, [className])}
                    direction="bottom left"
                    items={dropdownItems}
                    trigger={
                        <AvatarDeprecated
                            fallbackInverted
                            size={30}
                            src={authData.avatar}
                        />
                    }
                />
            }
        />
    );
});
