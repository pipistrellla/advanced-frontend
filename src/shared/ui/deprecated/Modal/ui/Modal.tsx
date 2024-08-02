import { FC, ReactNode } from 'react';

import { Mods, classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

import cls from './Modal.module.scss';
import { Portal } from '../../../Portal';
import { Overlay } from '../../Overlay';

interface modalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY: number = 300;
/**
 * компонент устарел
 * @deprecated
 */
export const Modal: FC<modalProps> = (props) => {
    const { className, children, isOpen, onClose, lazy } = props;

    const {
        close: closeHandler,
        isClosing,
        isMounted,
    } = useModal({
        onClose,
        isOpen,
        animationDelay: ANIMATION_DELAY,
    });

    const { theme } = useTheme();

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className, theme])}>
                <Overlay onClick={() => closeHandler()} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
};
