import { ReactNode, useState } from 'react';

import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Card } from '@/shared/ui/redesigned/Card';
import { VStack } from '@/shared/ui/Stack';

import { AddMovableObject } from '../AddMovableObject/AddMovableObject';
import { MovebleObject } from '../MovebleObject/MovebleObject';

interface FieldWithMovebleObjectsProps {
    className?: string;
    data: ReactNode[];
    options: ReactNode[];
}
// TODO сделать сохранение состояния, когда разберусь с использованием в компоненте
export const FieldWithMovebleObjects = (
    props: FieldWithMovebleObjectsProps,
) => {
    const { className, data, options } = props;

    const [movableObjects, setMovableObjects] = useState<ReactNode[]>(
        data ?? [],
    );

    const indicesCheck = (fromIndex: number, toIndex: number): boolean => {
        if (
            fromIndex < 0 ||
            fromIndex >= movableObjects.length ||
            toIndex < 0 ||
            toIndex >= movableObjects.length
        ) {
            return false;
        }

        return true;
    };

    const moveElement = (fromIndex: number, toIndex: number) => {
        if (toIndex > movableObjects.length) {
            toIndex = movableObjects.length - 1;
        }

        if (indicesCheck(fromIndex, toIndex)) {
            setMovableObjects((prevState) => {
                const tempArray = [...prevState];

                const element = tempArray.splice(fromIndex, 1);
                tempArray.splice(toIndex, 0, element);

                return tempArray;
            });
        }
    };

    const swapElements = (fromIndex: number, toIndex: number) => {
        if (indicesCheck(fromIndex, toIndex)) {
            setMovableObjects((prevState) => {
                const tempArray = [...prevState];
                [tempArray[fromIndex], tempArray[toIndex]] = [
                    tempArray[toIndex],
                    tempArray[fromIndex],
                ];
                return tempArray;
            });
        }
    };

    const LiftNodeUp = (index: number) => {
        swapElements(index, index - 1);
    };

    const LiftNodeDown = (index: number) => {
        swapElements(index, index + 1);
    };

    const DeleteNode = (index: number) => {
        setMovableObjects((prevState) => {
            const tempArray = [...prevState];

            tempArray.splice(index, 1);
            return tempArray;
        });
    };

    const ChangeNodePositionTo = (indexFrom: number, indexTo: number) => {
        moveElement(indexFrom, indexTo);
    };

    const AddNode = (newNode: ReactNode) => {
        setMovableObjects((prevState) => {
            const tempArray = [...prevState];
            tempArray.push(newNode);
            return tempArray;
        });
    };

    return (
        <Card className={classNames('', {}, [className])}>
            <VStack gap="8">
                {movableObjects.map((item, index) => (
                    <MovebleObject
                        DeleteNode={DeleteNode}
                        ChangeNodePositionTo={ChangeNodePositionTo}
                        LiftNodeUp={LiftNodeUp}
                        LiftNodeDown={LiftNodeDown}
                        key={String(Math.random()) + String(item?.toString())}
                        index={index}
                    >
                        {item}
                    </MovebleObject>
                ))}
            </VStack>
            <AddMovableObject options={options} addNode={AddNode} />
        </Card>
    );
};
