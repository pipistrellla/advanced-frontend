import React, { FC, memo } from 'react';
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    INVERTED= 'inverted',
    ERROR = 'error'
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center'
}

export enum TextSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string
    theme?: TextTheme;
    align?: TextAlign
    size?: TextSize
    'data-testid'?: string
}
type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    [TextSize.S]: 'h3',
    [TextSize.M]: 'h2',
    [TextSize.L]: 'h1',
};

export const Text: FC<TextProps> = memo((props:TextProps) => {

    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
        'data-testid': dataTestId = 'Text',
        ...otherProps
    } = props;
    // грубо говоря по размеру определяем какой тип h нужен,
    // а затем находим его по ключу и вставляем в разметку
    const HeaderTag = mapSizeToHeaderTag[size];

    return (
        <div className={classNames(cls.Text, {}, [
            className,
            cls[theme],
            cls[align],
            cls[size],
        ])}
        >
            { title && (
                <HeaderTag
                    data-testid={`${dataTestId}.Header`}
                    className={cls.title}
                >
                    {title}
                </HeaderTag>
            )}
            {text && (
                <p
                    data-testid={`${dataTestId}.Paragraph`}
                    className={cls.text}
                >
                    {text}
                </p>
            )}
        </div>
    );

});
