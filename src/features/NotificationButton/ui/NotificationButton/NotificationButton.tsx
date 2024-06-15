import React, { FC, memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import { Popover } from 'shared/ui/Popups/ui/Popover/Popover';
import { NotificationList } from 'entitis/Notification';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { Icon } from 'shared/ui/Icon';
import BellIcon from 'shared/assets/icons/bell.svg';
import { Drawer } from 'shared/ui/Drawer';
import { useDevice } from 'shared/lib/hooks/useDevice/useDevice';
import { AnimationProvider } from 'shared/lib/components/AnimationsProvider';
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
                <AnimationProvider>
                    <Drawer onClose={oncloseDrawer} isOpen={isOpen}>
                        <NotificationList />
                    </Drawer>
                </AnimationProvider>
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
