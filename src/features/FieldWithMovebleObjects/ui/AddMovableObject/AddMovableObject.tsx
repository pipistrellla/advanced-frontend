import React, { FC, memo, ReactNode, useState } from 'react';

import PlusIcon from '@/shared/assets/icons/plusIcon.svg';
import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Card } from '@/shared/ui/redesigned/Card';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { HStack } from '@/shared/ui/Stack';

import { NodeSelector } from '../NodeSelector/NodeSelector';

interface AddMovableObjectProps {
    className?: string;
    addNode: (node: ReactNode) => void;
    options: ReactNode[];
}

export const AddMovableObject: FC<AddMovableObjectProps> = memo(
    (props: AddMovableObjectProps) => {
        const { className, addNode, options } = props;

        const [isVisible, setIsVisible] = useState<boolean>(false);

        const OnClickSetModalOpen = () => {
            setIsVisible(true);
        };

        const OnClickSetModalClose = () => {
            setIsVisible(false);
        };

        return (
            <Card max className={classNames('', {}, [className])}>
                <HStack max justify="center">
                    <Icon
                        clickable
                        onClick={OnClickSetModalOpen}
                        Svg={PlusIcon}
                    />
                    <Modal
                        lazy
                        isOpen={isVisible}
                        onClose={OnClickSetModalClose}
                    >
                        <NodeSelector options={options} addNode={addNode} />
                    </Modal>
                </HStack>
            </Card>
        );
    },
);
