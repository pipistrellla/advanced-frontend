import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import { Popover } from 'shared/ui/Popups/ui/Popover/Popover';
import { NotificationList } from 'entitis/Notification';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { Icon } from 'shared/ui/Icon';
import BellIcon from 'shared/assets/icons/bell.svg';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
className?: string;
}

export const NotificationButton: FC<NotificationButtonProps> = memo((props) => {

    const { className } = props;

    return (
        <Popover
            className={classNames(cls.notificationButton, {}, [className])}
            direction="bottom left"
            trigger={(
                <Button theme={ButtonTheme.CLEAR}>
                    <Icon
                        Svg={BellIcon}
                        isStroke
                    />
                </Button>
            )}
        >
            <NotificationList className={cls.notifications} />
        </Popover>
    );

});
