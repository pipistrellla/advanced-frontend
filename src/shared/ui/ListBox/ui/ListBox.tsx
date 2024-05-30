import {
    FC, Fragment, memo, useState,
} from 'react';
import { Listbox as HLisBox } from '@headlessui/react';
import { classNames } from '../../../lib/helpers/ClassNames/ClassNames';
import { HStack } from '../../../ui/Stack';
import { Text } from '../../../ui/Text';
import { Button } from '../../../ui/Button';
import { Icon } from '../../../ui/Icon';
import cls from './ListBox.module.scss';
import Selected from '../../../assets/icons/selected.svg';

type DropdownDirection = 'top' | 'bottom'

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

const mapDirectionClass: Record<DropdownDirection, string> = {
    bottom: cls.optionsBottom,
    top: cls.optionsTop,
};

export const ListBox: FC<ListBoxProps> = (props) => {

    const [selectedPerson, setSelectedPerson] = useState();
    const {
        className,
        items,
        defaultValue,
        value,
        label,
        readonly,
        direction = 'bottom',
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
                className={classNames(cls.listBox, {}, [className])}
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
                                            [cls.active]: active,
                                            [cls.disabled]: item.disabled,
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
