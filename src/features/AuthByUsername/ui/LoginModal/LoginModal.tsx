import React, { FC } from 'react';
import { Modal } from 'shared/ui/Modal';
import { classNames } from 'shared/lib/helpers/ClassNames/ClassNames';
import cls from './LoginModal.module.scss';
import LoginForm from '../LoginForm/LoginForm';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal: FC<LoginModalProps> = (props) => {

    const {
        className,
        isOpen,
        onClose,
    } = props;
    return (

        <Modal
            lazy
            isOpen={isOpen}
            onClose={onClose}
            className={classNames(cls.LoginModal, {}, [className])}
        >
            <LoginForm />
        </Modal>
    );

};

export default LoginModal;
