import {
    FC, Fragment, memo, useState,
} from 'react';
import { Listbox as HLisBox } from '@headlessui/react';
import { DropdownDirection } from '@/shared/types/ui';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Text } from '../../../../ui/Text';
import { Icon } from '../../../../ui/Icon';
import { HStack } from '../../../../ui/Stack';
import { Button } from '../../../../ui/Button';
import Selected from '../../../../assets/icons/selected.svg';
import cls from './ListBox.module.scss';
import { mapDirectionClass } from '../styles/consts';
import popupsCls from '../styles/Popup.module.scss';

export interface ListBoxItem {
    value: string
    content: React.ReactNode
    disabled?: boolean
}

interface ListBoxProps {
    className?: string;
    items?: ListBoxItem[]
    value?: string
    defaultValue?: string
    onChange: (value: string) => void
    label?: string
    readonly?: boolean
    direction?: DropdownDirection
}

export const ListBox: FC<ListBoxProps> = (props) => {

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

    const optionClasses = [mapDirectionClass[direction]];

    return (
        <HStack gap="8">
            {label && <span><Text text={`${label} >`} /></span>}
            <HLisBox
                disabled={readonly}
                value={value}
                onChange={onChange}
                as="div"
                className={classNames(cls.listBox, {}, [className, popupsCls.popup])}
            >
                <HLisBox.Button
                    disabled={readonly}
                    className={cls.trigger}
                >
                    <Button
                        disabled={readonly}
                    >
                        {value ?? defaultValue}
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
                                        },
                                        [],
                                    )}
                                >
                                    <HStack gap="8">
                                        {selected && <Icon Svg={Selected} />}
                                        {typeof (item.content) === 'string'
                                            ? <Text text={item.content} />
                                            : item.content}
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
