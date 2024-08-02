import React, { FC, memo } from 'react';

import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';

import cls from './AppLogo.module.scss';
import Logo from '../../../../assets/icons/logo.svg';
import { HStack } from '../../../Stack';

interface AppLogoProps {
    className?: string;
    size?: number;
}

export const AppLogo: FC<AppLogoProps> = memo((props) => {
    const { className, size = 100 } = props;

    return (
        <HStack
            max
            justify="center"
            className={classNames(cls.appLogoWrapper, {}, [className])}
        >
            <div className={cls.gradientBig} />
            <div className={cls.gradientSmall} />
            <Logo
                width={size}
                height={size}
                color="black"
                className={cls.appLogo}
            />
        </HStack>
    );
});
