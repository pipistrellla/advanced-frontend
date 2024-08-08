import { FC, memo, useState } from 'react';

import { NotificationList } from '@/entitis/Notification';
import BellIcon from '@/shared/assets/icons/bell.svg';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { ToggleFeaturesComponent } from '@/shared/lib/features';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups/ui/Popover/Popover';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Popover } from '@/shared/ui/redesigned/Popups';

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
        <ToggleFeaturesComponent
            feature="isAppRedesigned"
            off={
                <ButtonDeprecated
                    onClick={onOpenDrawer}
                    theme={ButtonTheme.CLEAR}
                >
                    <IconDeprecated Svg={BellIcon} isStroke />
                </ButtonDeprecated>
            }
            on={
                <Icon Svg={NotificationIcon} clickable onClick={onOpenDrawer} />
            }
        />
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
        <ToggleFeaturesComponent
            feature="isAppRedesigned"
            off={
                <PopoverDeprecated
                    className={classNames(cls.notificationButton, {}, [
                        className,
                    ])}
                    direction="bottom left"
                    trigger={trigger}
                >
                    <NotificationList className={cls.notifications} />
                </PopoverDeprecated>
            }
            on={
                <Popover
                    className={classNames(cls.notificationButton, {}, [
                        className,
                    ])}
                    direction="bottom left"
                    trigger={trigger}
                >
                    <NotificationList className={cls.notifications} />
                </Popover>
            }
        />
    );
});
