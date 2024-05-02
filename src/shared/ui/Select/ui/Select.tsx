import React, {
    ChangeEvent, FC, memo, useMemo,
} from 'react';
import { Mods, classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import { Text } from 'shared/ui/Text';
import cls from './Select.module.scss';

export interface SelectOptions {
    value: string
    content: string
}

interface SelectProps {
    className?: string
    label: string
    options?: SelectOptions[]
    value?: string
    readonly?: boolean
    onChange?: (value: string) => void
}

const Select: FC<SelectProps> = memo((props: SelectProps) => {

    const {
        className,
        label,
        options,
        value,
        readonly,
        onChange,
    } = props;

    const optionList = useMemo(() => options?.map((opt) => (
        <option
            className={cls.option}
            value={opt.value}
            key={opt.value}
        >
            {opt.content}
        </option>
    )), [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {

        onChange?.(e.target.value);

    };

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && (
                <span className={cls.label}>
                    <Text text={`${label}>`} />
                </span>
            )}
            <select
                disabled={readonly}
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
            >
                {optionList}
            </select>
        </div>
    );

});

export default Select;
