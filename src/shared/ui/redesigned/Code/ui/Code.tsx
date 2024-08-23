import React, { FC, memo, useCallback } from 'react';

import CopyIcon from '@/shared/assets/icons/copyNew.svg';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';

import cls from './Code.module.scss';
import { Icon } from '../../Icon';
import { Text } from '../../Text';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code: FC<CodeProps> = memo((props: CodeProps) => {
    const { className, text } = props;

    const onClickCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        // тег сохраняет все пробелы и переносы из оригинальной строки
        <pre className={classNames(cls.codeRedesigned, {}, [className])}>
            <Icon
                clickable
                onClick={onClickCopy}
                className={cls.copyBtn}
                Svg={CopyIcon}
            />
            <code>
                <Text text={text} />
            </code>
        </pre>
    );
});
