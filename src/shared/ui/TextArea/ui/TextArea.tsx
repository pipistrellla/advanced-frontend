import React, {
    FC,
    TextareaHTMLAttributes,
    memo,
    useEffect,
    useRef,
    useState,
} from 'react';

import { classNames, Mods } from '@/shared/lib/helpers/ClassNames/ClassNames';

import cls from './TextArea.module.scss';
import { Text } from '../../redesigned/Text';
import { HStack } from '../../Stack';

type HTMLTextAreaProps = Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    'value' | 'onChange' | 'type' | 'readOnly'
>;

interface TextAreaProps extends HTMLTextAreaProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    readonly?: boolean;
    label?: string;
}

const TextArea: FC<TextAreaProps> = memo((props: TextAreaProps) => {
    const {
        className,
        value,
        onChange,
        placeholder,
        autofocus,
        label,
        readonly,
        ...otherProps
    } = props;
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleInput = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    };

    useEffect(() => {
        handleInput();
    }, []);

    const [isFocused, setIsFocused] = useState<boolean>(false);
    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange?.(e.target.value);
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
        [cls.focused]: isFocused,
    };

    const TextArea = (
        <textarea
            onInput={handleInput}
            ref={textareaRef}
            className={classNames(cls.textArea, mods, [className])}
            value={value}
            onChange={onChangeHandler}
            onFocus={onFocus}
            onBlur={onBlur}
            readOnly={readonly}
            placeholder={placeholder}
            {...otherProps}
        />
    );

    if (label) {
        return (
            <HStack max gap="8">
                <Text text={label} />
                {TextArea}
            </HStack>
        );
    }

    return TextArea;
});

export default TextArea;
