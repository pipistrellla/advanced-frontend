import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';

import cls from './FieldWithMovebleObjects.module.scss';
import { MovebleObject } from '../MovebleObject/MovebleObject';

interface FieldWithMovebleObjectsProps {
    className?: string;
}

export const FieldWithMovebleObjects = memo(
    (props: FieldWithMovebleObjectsProps) => {
        const { className } = props;
        const { t } = useTranslation();

        return (
            <div
                className={classNames(cls.FieldWithMovebleObjects, {}, [
                    className,
                ])}
            >
                <MovebleObject>1</MovebleObject>
                <MovebleObject>2</MovebleObject>
                <MovebleObject>3</MovebleObject>
            </div>
        );
    },
);
