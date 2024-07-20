import React, { memo } from 'react';

import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';

import cls from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    isStroke?: boolean;
    isInverted?: boolean;
}

export const Icon = memo((props: IconProps) => {
    const {
        className,
        Svg,
        isStroke = false,
        isInverted = false,
        ...otherProps
    } = props;

    const mods = {
        [cls.isInverted]: isInverted,
        [cls.isStroke]: isStroke,
        [cls.isInvertedStroke]: isStroke && isInverted,
    };

    return (
        <Svg
            className={classNames(cls.Icon, mods, [className])}
            {...otherProps}
        />
    );
});
