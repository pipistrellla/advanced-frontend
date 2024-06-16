import { FC, Fragment } from 'react';
import { Menu } from '@headlessui/react';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { DropdownDirection } from '@/shared/types/ui';
import AppLink from '../../../../ui/AppLink/AppLink';
import cls from './Dropdown.module.scss';
import { mapDirectionClass } from '../styles/consts';
import popupsCls from '../styles/Popup.module.scss';

export interface DropdownItem {
    disabled?: boolean
    content?: React.ReactNode
    onClick?: () => void
    href?: string
}

interface DropdownProps {
    className?: string;
    items: DropdownItem[]
    trigger: React.ReactNode
    direction: DropdownDirection
}

export const Dropdown: FC<DropdownProps> = (props) => {

    const {
        className,
        items,
        trigger,
        direction = 'bottom right',
    } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <Menu
            as="div"
            className={classNames(cls.dropdown, {}, [className, popupsCls.popup])}
        >
            <Menu.Button
                className={popupsCls.trigger}
            >
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                {items.map((item) => {

                    const content = ({ active }: {active: boolean}) => (
                        <button
                            type="button"
                            disabled={item.disabled}
                            onClick={item.onClick}
                            className={classNames(cls.item, { [cls.active]: active })}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {

                        return (
                            <Menu.Item
                                as={AppLink}
                                to={item.href}
                                disabled={item.disabled}
                            >
                                {content}
                            </Menu.Item>
                        );

                    }

                    return (
                        <Menu.Item
                            as={Fragment}
                            disabled={item.disabled}
                        >
                            {content}
                        </Menu.Item>
                    );

                })}

            </Menu.Items>
        </Menu>
    );

};
