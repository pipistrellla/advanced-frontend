import React, { CSSProperties, FC, useMemo } from 'react';
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string
    size?: number
    alt?: string
}

const Avatar: FC<AvatarProps> = (props) => {

    const {
        className,
        src,
        size,
        alt,
    } = props;
    const styles = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);

    return (
        <img
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.Avatar, {}, [className])}
        />
    );

};

export default Avatar;
