import { FC, memo, useState } from 'react';

import { NotificationList } from '@/entitis/Notification';
import BellIcon from '@/shared/assets/icons/bell.svg';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Drawer } from '@/shared/ui/Drawer';
import { Icon } from '@/shared/ui/Icon';
import { Popover } from '@/shared/ui/Popups/ui/Popover/Popover';

import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
className?: string;
}

export const NotificationButton: FC<NotificationButtonProps> = memo((props) => {

    const { className } = props;

    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = () => {

        setIsOpen(true);

    };
    const oncloseDrawer = () => {

        setIsOpen(false);

    };

    const trigger = (
        <Button
            onClick={onOpenDrawer}
            theme={ButtonTheme.CLEAR}
        >
            <Icon
                Svg={BellIcon}
                isStroke
            />
        </Button>
    );

    const isMobile = useDevice();

    if (isMobile) {

        return (
            <div>
                {trigger}
                <Drawer onClose={oncloseDrawer} isOpen={isOpen}>
                    <NotificationList />
                </Drawer>
            </div>
        );

    }

    return (

        <Popover
            className={classNames(cls.notificationButton, {}, [className])}
            direction="bottom left"
            trigger={trigger}
        >
            <NotificationList className={cls.notifications} />
        </Popover>

    );

});
