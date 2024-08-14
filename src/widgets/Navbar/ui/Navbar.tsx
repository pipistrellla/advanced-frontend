import { FC, memo } from 'react';

import { ToggleFeaturesComponent } from '@/shared/lib/features';

import { NavbarDeprecated } from './NavbarDeprecated/NavbarDeprecated';
import { NavbarRedesigned } from './NavbarRedesigned/NavbarRedesigned';

export interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = memo(({ className }: NavbarProps) => (
    <ToggleFeaturesComponent
        feature="isAppRedesigned"
        off={<NavbarDeprecated />}
        on={<NavbarRedesigned />}
    />
));
