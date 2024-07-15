import React, { CSSProperties, FC, useMemo } from 'react';

import UserIcon from '@/shared/assets/icons/UserIcon.svg';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';

import cls from './Avatar.module.scss';
import { AppImage } from '../../AppImage';
import { Icon } from '../../Icon';
import { Skeleton } from '../../Skeleton';

interface AvatarProps {
    className?: string;
    src?: string
    size?: number
    alt?: string
    fallbackInverted?: boolean
}

const Avatar: FC<AvatarProps> = (props) => {

    const {
        className,
        src,
        size = 100,
        alt,
        fallbackInverted,
    } = props;

    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size]);

    const errorFallback = (
        <Icon
            isInverted={fallbackInverted}
            width={size}
            height={size}
            Svg={UserIcon}
        />
    );
    const fallback = (
        <Skeleton
            width={size}
            height={size}
            border="50%"
        />
    );

    return (
        <AppImage
            errorFallback={errorFallback}
            fallback={fallback}
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.Avatar, {}, [className])}
        />
    );

};

export default Avatar;
