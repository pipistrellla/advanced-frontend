import React, { ChangeEvent, useMemo } from 'react';

import { Mods, classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';

import cls from './Select.module.scss';
import { Text } from '../../Text';

export interface SelectOptions<T extends string> {
    value: T;
    content: string;
}

interface SelectProps<T extends string> {
    className?: string;
    label: string;
    options?: SelectOptions<T>[];
    value?: T;
    readonly?: boolean;
    onChange?: (value: T) => void;
}

const Select = <T extends string>(props: SelectProps<T>) => {
    const { className, label, options, value, readonly, onChange } = props;

    const optionList = useMemo(
        () =>
            options?.map((opt) => (
                <option
                    className={cls.option}
                    value={opt.value}
                    key={opt.value}
                >
                    {opt.content}
                </option>
            )),
        [options],
    );

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange?.(e.target.value as T);
        }
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
};

export default Select;
