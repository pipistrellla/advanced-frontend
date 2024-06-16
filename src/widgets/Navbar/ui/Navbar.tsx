import {
    FC, memo, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Button } from '@/shared/ui/Button';
import { ButtonTheme } from '@/shared/ui/Button/ui/Button';
import { LoginModal } from '@/features/AuthByUsername';
import {
    getUserAuthData, userActions,
} from '@/entitis/User';
import { Text, TextTheme } from '@/shared/ui/Text';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import AppLink, { AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import { HStack } from '@/shared/ui/Stack';

import { NotificationButton } from '@/features/NotificationButton';
import { AvatarDropdown } from '@/features/AvatarDropdown/ui/AvatarDropdown/AvatarDropdown';
import { Drawer } from '@/shared/ui/Drawer';
import { NotificationList } from '@/entitis/Notification';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = memo(({ className }: NavbarProps) => {

    const { t } = useTranslation('navbar');
    const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

    const authData = useSelector(getUserAuthData);
    const onCloseModal = useCallback(() => {

        setIsAuthModal(false);

    }, []);

    const onShowModal = useCallback(() => {

        setIsAuthModal(true);

    }, []);

    if (authData) {

        return (
            <header className={classNames(cls.navbar, {}, [className])}>
                <Text
                    theme={TextTheme.INVERTED}
                    className={cls.appName}
                    title={t('Advanced-project')}
                />
                <AppLink
                    to={RoutePath.article_create}
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.createLink}
                >
                    {t('Создать статью')}
                </AppLink>
                <HStack
                    className={cls.actions}
                    gap="16"
                >
                    <NotificationButton />
                    <AvatarDropdown />
                </HStack>

            </header>
        );

    }

    return (

        <header className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            { isAuthModal && (
                <LoginModal
                    isOpen={isAuthModal}
                    onClose={onCloseModal}
                />
            )}
        </header>
    );

});
