import { FC, memo, useCallback, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entitis/User';
import { ToggleFeaturesComponent } from '@/shared/lib/features';

import { NavbarDeprecated } from './NavbarDeprecated/NavbarDeprecated';
import { NavbarRedesigned } from './NavbarRedesigned/NavbarRedesigned';

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
            <ToggleFeaturesComponent
                feature="isAppRedesigned"
                off={<NavbarDeprecated />}
                on={<NavbarRedesigned />}
            />
        );
    }

    return (
        <ToggleFeaturesComponent
            feature="isAppRedesigned"
            off={<NavbarDeprecated />}
            on={<NavbarRedesigned />}
        />
    );
});
