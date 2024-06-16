import { FC, memo } from 'react';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Card, CardTheme } from '@/shared/ui/Card';
import { Text } from '@/shared/ui/Text';
import AppLink from '@/shared/ui/AppLink/AppLink';
import { Notification } from '../../model/types/NotificationSchema';
import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
    className?: string;
    item: Notification;
}

export const NotificationItem: FC<NotificationItemProps> = memo((props:NotificationItemProps) => {

    const {
        className,
        item,
    } = props;

    const content = (
        <Card
            theme={CardTheme.OUTLINED}
            className={classNames(cls.notificationItem, {}, [className])}
        >
            <Text title={item.title} text={item.description} />
        </Card>
    );

    if (item.href) {

        return (
            <AppLink
                className={cls.link}
                target="_blank"
                to={item.href}
                rel="noreferrer"
            >
                {content}
            </AppLink>
        );

    }

    return content;

});
