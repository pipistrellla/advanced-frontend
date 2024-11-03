import React, { FC, memo, ReactNode } from 'react';

import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';

import cls from './NodeSelector.module.scss';

interface NodeSelectorProps {
    className?: string;
    addNode: (node: ReactNode) => void;
}

export const NodeSelector: FC<NodeSelectorProps> = memo((props) => {
    const { className, addNode } = props;

    const onClickAddNode = () => {
        addNode(<div>{Date.now()}</div>);
    };

    return (
        <Card className={classNames(cls.nodeSelector, {}, [className])}>
            <Button onClick={onClickAddNode}>12313</Button>
        </Card>
    );
});
