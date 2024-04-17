import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import Input from 'shared/ui/Input/ui/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

const LoginForm: FC<LoginFormProps> = (props) => {

    const {
        className,
    } = props;

    const { t } = useTranslation('navbar');

    return (
        <div className={cls.LoginForm}>
            <Input
                type="text"
                className={cls.input}
                placeholder={t('введите имя пользователя')}
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('введите имя пароль')}
            />
            <Button className={cls.LoginBtn}>
                {t('Войти')}
            </Button>
        </div>
    );

};

export default LoginForm;
