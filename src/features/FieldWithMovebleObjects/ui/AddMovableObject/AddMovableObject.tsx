import React, { FC, memo, ReactNode, useState } from 'react';

import PlusIcon from '@/shared/assets/icons/plusIcon.svg';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Card } from '@/shared/ui/redesigned/Card';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { HStack } from '@/shared/ui/Stack';

import cls from './AddMovableObject.module.scss';
import { NodeSelector } from '../NodeSelector/NodeSelector';

interface AddMovableObjectProps {
    className?: string;
    addNode: (node: ReactNode) => void;
}

export const AddMovableObject: FC<AddMovableObjectProps> = memo((props) => {
    const { className, addNode } = props;

    const [isVisible, setIsVisible] = useState<boolean>(false);

    const OnClickSetModalOpen = () => {
        setIsVisible(true);
    };

    const OnClickSetModalClose = () => {
        setIsVisible(false);
    };

    return (
        <Card max className={classNames(cls.addMovableObject, {}, [className])}>
            <HStack max justify="center">
                <Icon clickable onClick={OnClickSetModalOpen} Svg={PlusIcon} />
                <Modal lazy isOpen={isVisible} onClose={OnClickSetModalClose}>
                    <NodeSelector addNode={addNode} />
                </Modal>
            </HStack>
        </Card>
    );
});
