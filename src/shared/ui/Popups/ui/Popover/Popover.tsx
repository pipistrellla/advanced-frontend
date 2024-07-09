import React, { FC } from 'react';

import { Popover as HPopover } from '@headlessui/react';

import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { DropdownDirection } from '@/shared/types/ui';

import cls from './Popover.module.scss';
import { mapDirectionClass } from '../styles/consts';
import popupsCls from '../styles/Popup.module.scss';

interface PopoverProps {
    className?: string;
    direction?: DropdownDirection;
    trigger?: React.ReactNode;
    children?: React.ReactNode
}

export const Popover: FC<PopoverProps> = (props) => {

    const {
        className,
        direction = 'bottom right',
        trigger,
        children,
    } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <HPopover
            className={classNames(cls.popover, {}, [className, popupsCls.popup])}
        >
            <HPopover.Button
                as="div"
                className={popupsCls.trigger}
            >
                {trigger}
            </HPopover.Button>

            <HPopover.Panel
                className={classNames(cls.panel, {}, menuClasses)}
            >

                {children}
            </HPopover.Panel>
        </HPopover>
    );

};
