import React, { FC, memo } from 'react';

import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';

import cls from './AppLogo.module.scss';
import Logo from '../../../assets/icons/logo.svg';
import { HStack } from '../../Stack';

interface AppLogoProps {
    className?: string;
}

export const AppLogo: FC<AppLogoProps> = memo((props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <HStack
            max
            justify="center"
            className={classNames(cls.appLogoWrapper, {}, [className])}
        >
            <div className={cls.gradientBig} />
            <div className={cls.gradientSmall} />
            <Logo />
        </HStack>
    );
});
