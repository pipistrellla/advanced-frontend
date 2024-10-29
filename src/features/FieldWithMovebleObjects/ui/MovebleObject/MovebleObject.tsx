import React, { FC, memo, useCallback, useState } from 'react';

import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Card } from '@/shared/ui/redesigned/Card';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Input } from '@/shared/ui/redesigned/Input';
import { HStack, VStack } from '@/shared/ui/Stack';

import cls from './MovebleObject.module.scss';

interface MovebleObjectProps {
    className?: string;
    children: React.ReactNode;
    index: number;
    LiftNodeUp: (index: number) => void;
    LiftNodeDown: (index: number) => void;
    ChangeNodePositionTo: (indexFrom: number, indexTo: number) => void;
}

export const MovebleObject: FC<MovebleObjectProps> = memo(
    (props: MovebleObjectProps) => {
        const {
            className,
            children,
            index,
            LiftNodeDown,
            LiftNodeUp,
            ChangeNodePositionTo,
        } = props;

        const iconSize: number = 64;

        const [position, setPosition] = useState<string>(`${index}`);

        const HandleClickUp = useCallback(() => {
            LiftNodeUp(index);
        }, [LiftNodeUp, index]);

        const HandleClickDown = useCallback(() => {
            LiftNodeDown(index);
        }, [LiftNodeDown, index]);

        const HandleInputChange = useCallback(() => {
            const tempValue = Number(position?.replace(/\D/gi, '') || 0);

            ChangeNodePositionTo(index, tempValue);
        }, [ChangeNodePositionTo, index, position]);

        return (
            <Card
                variant="outlined"
                max
                className={classNames(cls.movebleObject, {}, [className])}
            >
                <VStack max align="center" gap="16">
                    <Card variant="outlined" border="partial">
                        <HStack justify="center">
                            <Icon
                                width={iconSize}
                                height={iconSize}
                                Svg={ArrowIcon}
                                className={cls.Icon}
                                clickable
                                onClick={HandleClickUp}
                            />
                            <Input
                                className={cls.Input}
                                value={position}
                                onBlur={HandleInputChange}
                                onChange={setPosition}
                            />
                            <Icon
                                width={iconSize}
                                height={iconSize}
                                Svg={ArrowIcon}
                                clickable
                                onClick={HandleClickDown}
                            />
                        </HStack>
                    </Card>
                    {children}
                </VStack>
            </Card>
        );
    },
);
