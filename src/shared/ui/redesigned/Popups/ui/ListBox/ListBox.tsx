import { Fragment, useMemo } from 'react';

import { Listbox as HLisBox } from '@headlessui/react';

import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { DropdownDirection } from '@/shared/types/ui';

import cls from './ListBox.module.scss';
import Selected from '../../../../../assets/icons/selected.svg';
import { HStack } from '../../../../Stack';
import { Button } from '../../../Button';
import { Icon } from '../../../Icon';
import { Text } from '../../../Text';
import { mapDirectionClass } from '../styles/consts';
import popupsCls from '../styles/Popup.module.scss';

export interface ListBoxItem<T extends string> {
    value: T;
    content: React.ReactNode;
    disabled?: boolean;
}

interface ListBoxProps<T extends string> {
    className?: string;
    items?: ListBoxItem<T>[];
    value?: T;
    defaultValue?: T;
    onChange: (value: T) => void;
    label?: string;
    readonly?: boolean;
    direction?: DropdownDirection;
}

export const ListBox = <T extends string>(props: ListBoxProps<T>) => {
    const {
        className,
        items,
        defaultValue,
        value,
        label,
        readonly,
        direction = 'bottom right',
        onChange,
    } = props;

    const selectedItem = useMemo(
        () => items?.find((item) => item.value === value),
        [items, value],
    );

    const optionClasses = [mapDirectionClass[direction], popupsCls.menu];

    return (
        <HStack gap="8">
            {label && (
                <span>
                    <Text text={`${label} >`} />
                </span>
            )}
            <HLisBox
                disabled={readonly}
                value={value}
                onChange={onChange}
                as="div"
                className={classNames(cls.listBox, {}, [
                    className,
                    popupsCls.popup,
                ])}
            >
                <HLisBox.Button
                    // disabled={readonly}
                    className={cls.trigger}
                >
                    <Button variant="filled" disabled={readonly}>
                        {selectedItem?.content ?? defaultValue}
                    </Button>
                </HLisBox.Button>
                <HLisBox.Options
                    className={classNames(cls.options, {}, optionClasses)}
                >
                    {items?.map((item) => (
                        <HLisBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(
                                        cls.item,
                                        {
                                            [popupsCls.active]: active,
                                            [popupsCls.disabled]: item.disabled,
                                            [popupsCls.selected]: selected,
                                        },
                                        [],
                                    )}
                                >
                                    <HStack gap="8">
                                        {typeof item.content === 'string' ? (
                                            <Text text={item.content} />
                                        ) : (
                                            item.content
                                        )}
                                        {selected && <Icon Svg={Selected} />}
                                    </HStack>
                                </li>
                            )}
                        </HLisBox.Option>
                    ))}
                </HLisBox.Options>
            </HLisBox>
        </HStack>
    );
};
