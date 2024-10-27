import { ReactNode } from 'react';

import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Card } from '@/shared/ui/redesigned/Card';
import { Code } from '@/shared/ui/redesigned/Code';
import { VStack } from '@/shared/ui/Stack';

import cls from './FieldWithMovebleObjects.module.scss';
import { MovebleObject } from '../MovebleObject/MovebleObject';

interface FieldWithMovebleObjectsProps {
    className?: string;
    data: ReactNode[];
}

export const FieldWithMovebleObjects = (
    props: FieldWithMovebleObjectsProps,
) => {
    const { className } = props;
    const { data } = props;

    const LiftNodeUp = (index: number) => {
        console.log(index);
    };

    const LiftNodeDown = (index: number) => {
        console.log(index);
    };

    const ChangeNodePositionTo = () => {
        console.log('inputChange');
    };

    return (
        <Card
            className={classNames(cls.FieldWithMovebleObjects, {}, [className])}
        >
            <VStack gap="8">
                {data.map((item, index) => (
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
                <MovebleObject
                    ChangeNodePositionTo={ChangeNodePositionTo}
                    LiftNodeUp={LiftNodeUp}
                    LiftNodeDown={LiftNodeDown}
                    index={10}
                >
                    {/* eslint-disable-next-line i18next/no-literal-string */}
                    <Code text="hello world  dolorem omnis corporis suscipit est rerum ipsa atque!" />
                </MovebleObject>
            </VStack>
        </Card>
    );
};
