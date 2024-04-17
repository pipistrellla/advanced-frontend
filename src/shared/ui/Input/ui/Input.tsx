import React, {
    FC, InputHTMLAttributes, memo, useState,
} from 'react';
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import cls from './Input.module.scss';
/* eslint react/prop-types: 0 */
// Omit забирает все свойства кроме введенных (первый аргумент - что берем
// второй что исключаем)
type HTMLInputProps =
Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'type'>

interface InputProps extends HTMLInputProps{
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    type?: string
    autofocus?:boolean
}

const Input: FC<InputProps> = memo((props) => {

    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        ...otherProps
    } = props;

    const [isFocused, setIsFocused] = useState<boolean>(false);

    const onBlur = () => {

        setIsFocused(false);

    };

    const onFocus = () => {

        setIsFocused(true);

    };

    const [caretPosition, setCaretPosition] = useState<number>(0);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {

        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);

    };

    const onSelectHandler = (e: any) => {

        setCaretPosition(e?.target?.selectionStart);

    };

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            { placeholder
                && (
                    <div className={cls.placeholder}>
                        {`${placeholder}>`}
                    </div>
                )}
            <div className={cls.caretWrapper}>
                <input
                    className={cls.Input}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelectHandler}
                    {...otherProps}
                />

                <span
                    className={isFocused ? cls.caretFocus : cls.caret}
                    style={{ left: `${caretPosition * 9}px` }}
                />

            </div>
        </div>
    );

});

export default Input;
