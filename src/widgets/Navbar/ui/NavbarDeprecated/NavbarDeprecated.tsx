import { FC, memo, useCallback, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entitis/User';
import { LoginModal } from '@/features/AuthByUsername';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import { NotificationButton } from '@/features/NotificationButton';
import { getRouteArticleCreate } from '@/shared/const/router';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { HStack } from '@/shared/ui/deprecated/Stack';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';

import cls from '../Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const NavbarDeprecated: FC<NavbarProps> = memo(
    ({ className }: NavbarProps) => {
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
                        to={getRouteArticleCreate()}
                        theme={AppLinkTheme.SECONDARY}
                        className={cls.createLink}
                    >
                        {t('Создать статью')}
                    </AppLink>
                    <HStack className={cls.actions} gap="16">
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
                {isAuthModal && (
                    <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
                )}
            </header>
        );
    },
);
