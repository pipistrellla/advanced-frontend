import React, { FC, Suspense } from 'react';

import { classNames } from '@/shared/lib/helpers/ClassNames/ClassNames';
import { Loader } from '@/shared/ui/Loader';
import { Modal } from '@/shared/ui/Modal';

import cls from './LoginModal.module.scss';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal: FC<LoginModalProps> = (props) => {
    const { className, isOpen, onClose } = props;
    return (
        <Modal
            lazy
            isOpen={isOpen}
            onClose={onClose}
            className={classNames(cls.LoginModal, {}, [className])}
        >
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onSucces={onClose} />
            </Suspense>
        </Modal>
    );
};

export default LoginModal;
