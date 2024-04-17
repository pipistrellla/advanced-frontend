import React, {
    FC, ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import { Portal } from 'shared/ui/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './Modal.module.scss';

interface modalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

const ANIMATION_DELAY:number = 300;

export const Modal: FC<modalProps> = (props) => {

    const {
        className,
        children,
        isOpen,
        onClose,
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef < ReturnType<typeof setTimeout>>();
    const { theme } = useTheme();

    const closeHandler = useCallback(() => {

        if (onClose) {

            setIsClosing(true);
            timerRef.current = setTimeout(() => {

                onClose();
                setIsClosing(false);

            }, ANIMATION_DELAY);

        }

    }, [onClose]);

    const onContentClick = (e: React.MouseEvent) => {

        e.stopPropagation();

    };

    const onKeyDown = useCallback((e: KeyboardEvent) => {

        if (e.key === 'Escape')
            closeHandler();

    }, [closeHandler]);

    // для очистки таймеров нужно делать это в useEffect, на всякий случай
    // елси вдруг окно будет демонтировано из домдерева
    useEffect(() => {

        if (isOpen)
            window.addEventListener('keydown', onKeyDown);
        console.log('');
        // ретерн сработает прямо перед демонтажем компонента
        return () => {

            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);

        };

    }, [isOpen, onKeyDown]);
    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className, theme])}>
                <div className={cls.overlay} onClick={() => closeHandler()}>
                    <div
                        className={cls.content}
                        onClick={(e) => onContentClick(e)}
                    >
                        {children}
                    </div>
                </div>

            </div>
        </Portal>
    );

};
