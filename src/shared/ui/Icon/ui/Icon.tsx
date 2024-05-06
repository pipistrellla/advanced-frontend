import React, { memo } from 'react';
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string;
    Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    isStroke?: boolean
}

export const Icon = memo((props: IconProps) => {

    const {
        className, Svg,
        isStroke = false,
    } = props;

    const mods = {
        [cls.isStroke]: isStroke,
    };
    return (
        <Svg className={classNames(cls.Icon, mods, [className])} />
    );

});
