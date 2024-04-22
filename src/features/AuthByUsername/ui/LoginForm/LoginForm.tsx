import React, {
    FC, memo, useCallback, useEffect,
} from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import Input from 'shared/ui/Input/ui/Input';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { TextTheme, Text } from 'shared/ui/Text';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider/config/StateSchema';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { LoginActions, LoginReducer } from '../../model/slice/LoginSlice';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string
}

const initialsReducers: ReducersList = {
    loginForm: LoginReducer,
};

const LoginForm: FC<LoginFormProps> = memo((props) => {

    const {
        className,
    } = props;

    const { t } = useTranslation('navbar');
    const dispatch = useDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

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
