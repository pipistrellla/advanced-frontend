import React, { FC, memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import CopyIcon from '@/shared/assets/icons/copy.svg';
import { ButtonTheme } from '../../Button/ui/Button';
import { Icon } from '../../Icon';
import { Button } from '../../Button';
import cls from './Code.module.scss';
import { Text } from '../../Text';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code: FC<CodeProps> = memo((props: CodeProps) => {

    const {
        className,
        text,
    } = props;

    const onClickCopy = useCallback(() => {

        navigator.clipboard.writeText(text);

    }, [text]);

    return (
        // тег сохраняет все пробелы и переносы из оригинальной строки
        <pre className={classNames(cls.code, {}, [className])}>
            <Button
                onClick={onClickCopy}
                theme={ButtonTheme.CLEAR}
                className={cls.copyBtn}
            >
                <Icon isStroke Svg={CopyIcon} />
            </Button>
            <code>
                <Text text={text} />
            </code>
        </pre>
    );

});
