import React, { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import { Button } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon';
import CopyIcon from 'shared/assets/icons/copy.svg';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import cls from './Code.module.scss';

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
                {text}
            </code>
        </pre>
    );

});
