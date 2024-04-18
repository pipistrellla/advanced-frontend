import React, { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import Input from 'shared/ui/Input/ui/Input';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { TextTheme, Text } from 'shared/ui/Text';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { LoginActions } from '../../model/slice/LoginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

const LoginForm: FC<LoginFormProps> = memo((props) => {

    const {
        className,
    } = props;

    const { t } = useTranslation('navbar');
    const dispatch = useDispatch();
    const {
        username,
        password,
        isLoading,
        error,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value : string) => {

        dispatch(LoginActions.setUsername(value));

    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {

        dispatch(LoginActions.setPassword(value));

    }, [dispatch]);

    const onClickLogin = useCallback(() => {

        dispatch(loginByUsername({ username, password }));

    }, [dispatch, username, password]);

    return (
        <div className={cls.LoginForm}>
            <Text title={t('Форма авторизации')} />
            {error && (
                <Text
                    theme={TextTheme.ERROR}
                    text={t('вы ввели неверный логин или пароль')}
                />
            )}

            <Input
                type="text"
                className={cls.input}
                placeholder={t('введите имя пользователя')}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('введите пароль')}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                disabled={isLoading}
                className={cls.LoginBtn}
                theme={ButtonTheme.OUTLINE}
                onClick={onClickLogin}
            >
                {t('Войти')}
            </Button>
        </div>
    );

});

export default LoginForm;
