import { FC, memo } from 'react';

import { ToggleFeaturesComponent } from '@/shared/lib/features';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Card as CardDeprecated, CardTheme } from '@/shared/ui/deprecated/Card';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text } from '@/shared/ui/redesigned/Text';

import cls from './NotificationItem.module.scss';
import { Notification } from '../../model/types/NotificationSchema';

interface NotificationItemProps {
    className?: string;
    item: Notification;
}

export const NotificationItem: FC<NotificationItemProps> = memo(
    (props: NotificationItemProps) => {
        const { className, item } = props;

        const content = (
            <ToggleFeaturesComponent
                feature="isAppRedesigned"
                off={
                    <CardDeprecated
                        theme={CardTheme.OUTLINED}
                        className={classNames(cls.notificationItem, {}, [
                            className,
                        ])}
                    >
                        <TextDeprecated
                            title={item.title}
                            text={item.description}
                        />
                    </CardDeprecated>
                }
                on={
                    <Card
                        className={classNames(cls.notificationItem, {}, [
                            className,
                        ])}
                    >
                        <Text title={item.title} text={item.description} />
                    </Card>
                }
            />
        );

        if (item.href) {
            return (
                <a
                    className={cls.link}
                    target="_blank"
                    href={item.href}
                    rel="noreferrer"
                >
                    {content}
                </a>
            );
        }

        return content;
    },
);
