import { FC, memo, useCallback, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entitis/User';
import { LoginModal } from '@/features/AuthByUsername';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import { NotificationButton } from '@/features/NotificationButton';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Button } from '@/shared/ui/redesigned/Button';
import { HStack } from '@/shared/ui/Stack';

import { NavbarProps } from '../Navbar';
import cls from '../Navbar.module.scss';

export const NavbarRedesigned: FC<NavbarProps> = memo(
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
                <header
                    className={classNames(cls.navbarRedesigned, {}, [
                        className,
                    ])}
                >
                    <HStack className={cls.actions} gap="16">
                        <NotificationButton />
                        <AvatarDropdown />
                    </HStack>
                </header>
            );
        }

        return (
            <header
                className={classNames(cls.navbarRedesigned, {}, [className])}
            >
                <Button
                    variant="clear"
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
