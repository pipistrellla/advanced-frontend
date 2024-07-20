import { FC, memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import DynamicModuleLoader, {
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import Input from '@/shared/ui/Input/ui/Input';
import { TextTheme, Text } from '@/shared/ui/Text';

import cls from './LoginForm.module.scss';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { LoginActions, LoginReducer } from '../../model/slice/LoginSlice';

export interface LoginFormProps {
    className?: string;
    // этот пропс нуже чтобы закрывать модалку при успешной авторизации
    // так как при успешной авторизации мы ее просто демонтировали
    onSucces: () => void;
}

const initialsReducers: ReducersList = {
    loginForm: LoginReducer,
};

const LoginForm: FC<LoginFormProps> = memo((props) => {
    const { className, onSucces } = props;

    const { t } = useTranslation('navbar');
    const dispatch = useAppDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(LoginActions.setUsername(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(LoginActions.setPassword(value));
        },
        [dispatch],
    );

    const onClickLogin = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSucces();
        }
    }, [dispatch, username, password, onSucces]);

    return (
        <DynamicModuleLoader
            reducers={initialsReducers}
            // если указывать без выноса в отдельную переменную
            // то каждый новый рендер будут создваться новые ссылки на
            // обьекты
            removeAFterUnmount
        >
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
        </DynamicModuleLoader>
    );
});

export default LoginForm;
