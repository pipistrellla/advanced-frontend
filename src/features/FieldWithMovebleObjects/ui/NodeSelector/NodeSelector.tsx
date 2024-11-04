import React, { FC, memo, ReactNode } from 'react';

import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack } from '@/shared/ui/Stack';

import cls from './NodeSelector.module.scss';

interface NodeSelectorProps {
    className?: string;
    addNode: (node: ReactNode) => void;
    options: ReactNode[];
}

export const NodeSelector: FC<NodeSelectorProps> = memo((props) => {
    const { className, addNode, options } = props;

    const onClickAddNode = (node: ReactNode) => {
        addNode(<div>{node}</div>);
    };

    return (
        <Card className={classNames(cls.nodeSelector, {}, [className])}>
            <HStack max gap="24">
                {options.map((item, index) => (
                    <Button
                        key={index}
                        onClick={() => {
                            onClickAddNode(item);
                        }}
                    >
                        {item}
                    </Button>
                ))}
            </HStack>
        </Card>
    );
});
