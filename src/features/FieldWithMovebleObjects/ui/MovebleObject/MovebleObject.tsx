import React, { FC, useCallback, useState } from 'react';

import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import TrashIcon from '@/shared/assets/icons/trashIcon.svg';
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
    DeleteNode: (index: number) => void;
    ChangeNodePositionTo: (indexFrom: number, indexTo: number) => void;
}

export const MovebleObject: FC<MovebleObjectProps> = (
    props: MovebleObjectProps,
) => {
    const {
        className,
        children,
        index,
        LiftNodeDown,
        LiftNodeUp,
        ChangeNodePositionTo,
        DeleteNode,
    } = props;

    const iconSize: number = 64;

    const [position, setPosition] = useState<string>('');

    const HandleClickUp = useCallback(() => {
        LiftNodeUp(+index);
    }, [LiftNodeUp, index]);

    const HandleClickDown = useCallback(() => {
        LiftNodeDown(+index);
    }, [LiftNodeDown, index]);

    const HandleClickDelete = useCallback(() => {
        DeleteNode(+index);
    }, [DeleteNode, index]);

    const HandleInputOnBlur = useCallback(() => {
        if (position) {
            ChangeNodePositionTo(+index, +position - 1);
            setPosition('');
        }
    }, [ChangeNodePositionTo, index, position]);

    const HandleInputChange = useCallback((value?: string) => {
        setPosition(value?.replace(/\D/gi, '') || '');
    }, []);

    return (
        <Card
            variant="outlined"
            max
            className={classNames(cls.movebleObject, {}, [className])}
        >
            <VStack max align="center" gap="16">
                <Card variant="outlined" border="partial">
                    <HStack justify="center">
                        {index + 1}
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
                            onBlur={HandleInputOnBlur}
                            onChange={HandleInputChange}
                        />
                        <Icon
                            width={iconSize}
                            height={iconSize}
                            Svg={ArrowIcon}
                            clickable
                            onClick={HandleClickDown}
                        />
                        <Icon
                            Svg={TrashIcon}
                            clickable
                            onClick={HandleClickDelete}
                        />
                    </HStack>
                </Card>
                {children}
            </VStack>
        </Card>
    );
};
