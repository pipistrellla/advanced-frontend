import { memo, ReactNode, useState } from 'react';

import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Card } from '@/shared/ui/redesigned/Card';
import { VStack } from '@/shared/ui/Stack';

import cls from './FieldWithMovebleObjects.module.scss';
import { MovebleObject } from '../MovebleObject/MovebleObject';

interface FieldWithMovebleObjectsProps {
    className?: string;
    data: ReactNode[];
}

export const FieldWithMovebleObjects = memo(
    (props: FieldWithMovebleObjectsProps) => {
        const { className } = props;
        const { data } = props;

        const [movableObjects, setMovableObjects] = useState<ReactNode[]>(
            data ?? [],
        );

        const swapElements = (indexFrom: number, indexTo: number) => {
            if (
                !(
                    indexFrom < 0 ||
                    indexFrom >= movableObjects.length ||
                    indexTo < 0 ||
                    indexTo >= movableObjects.length
                )
            ) {
                setMovableObjects((prevState) => {
                    const newState = [...prevState]; // Создаем копию массива
                    [newState[indexFrom], newState[indexTo]] = [
                        newState[indexTo],
                        newState[indexFrom],
                    ]; // Меняем местами элементы
                    return newState;
                });
            }
        };

        const LiftNodeUp = (index: number) => {
            swapElements(index, index - 1);
        };

        const LiftNodeDown = (index: number) => {
            swapElements(index, index + 1);
        };

        const ChangeNodePositionTo = (indexFrom: number, indexTo: number) => {
            console.log(indexFrom, indexTo);

            swapElements(indexFrom, indexTo);
        };

        return (
            <Card
                className={classNames(cls.FieldWithMovebleObjects, {}, [
                    className,
                ])}
            >
                <VStack gap="8">
                    {movableObjects.map((item, index) => (
                        <MovebleObject
                            ChangeNodePositionTo={ChangeNodePositionTo}
                            LiftNodeUp={LiftNodeUp}
                            LiftNodeDown={LiftNodeDown}
                            key={index}
                            index={index}
                        >
                            {item}
                        </MovebleObject>
                    ))}
                </VStack>
            </Card>
        );
    },
);
