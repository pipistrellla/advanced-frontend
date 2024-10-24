import React, { FC, memo } from 'react';

import { useTranslation } from 'react-i18next';

import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Card } from '@/shared/ui/redesigned/Card';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Input } from '@/shared/ui/redesigned/Input';
import { HStack } from '@/shared/ui/Stack';

import cls from './MovebleObject.module.scss';

interface MovebleObjectProps {
    className?: string;
    children: React.ReactNode;
}

export const MovebleObject: FC<MovebleObjectProps> = memo((props) => {
    const { className, children } = props;
    const { t } = useTranslation();

    return (
        <Card max className={classNames(cls.movebleObject, {}, [className])}>
            <Card>
                <HStack max justify="center">
                    <Icon Svg={ArrowIcon} className={cls.Icon} />
                    <Input placeholder="123123213" />
                    <Icon Svg={ArrowIcon} />
                </HStack>
            </Card>
            {children}
        </Card>
    );
});
