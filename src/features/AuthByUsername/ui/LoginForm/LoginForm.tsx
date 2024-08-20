import { FC, memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import DynamicModuleLoader, {
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeaturesComponent } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Input } from '@/shared/ui/redesigned/Input';
import { Text } from '@/shared/ui/redesigned/Text';
import { VStack } from '@/shared/ui/Stack';

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
    onSuccess: () => void;
}

const initialsReducers: ReducersList = {
    loginForm: LoginReducer,
};

const LoginForm: FC<LoginFormProps> = memo((props: LoginFormProps) => {
    const { className, onSuccess } = props;

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
            onSuccess();
            window.location.reload();
        }
    }, [dispatch, username, password, onSuccess]);

    return (
        <DynamicModuleLoader
            reducers={initialsReducers}
            // если указывать без выноса в отдельную переменную
            // то каждый новый рендер будут создваться новые ссылки на
            // обьекты
            removeAFterUnmount
        >
            <ToggleFeaturesComponent
                feature="isAppRedesigned"
                off={
                    <div className={cls.LoginForm}>
                        <TextDeprecated title={t('Форма авторизации')} />
                        {error && (
                            <TextDeprecated
                                theme={TextTheme.ERROR}
                                text={t('вы ввели неверный логин или пароль')}
                            />
                        )}

                        <InputDeprecated
                            type="text"
                            className={cls.input}
                            placeholder={t('введите имя пользователя')}
                            onChange={onChangeUsername}
                            value={username}
                        />
                        <InputDeprecated
                            type="text"
                            className={cls.input}
                            placeholder={t('введите пароль')}
                            onChange={onChangePassword}
                            value={password}
                        />
                        <ButtonDeprecated
                            disabled={isLoading}
                            className={cls.LoginBtn}
                            theme={ButtonTheme.OUTLINE}
                            onClick={onClickLogin}
                        >
                            {t('Войти')}
                        </ButtonDeprecated>
                    </div>
                }
                on={
                    <VStack className={cls.LoginForm} gap="16">
                        <Text title={t('Форма авторизации')} />
                        {error && (
                            <Text
                                variant="error"
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
                            variant="outline"
                            onClick={onClickLogin}
                        >
                            {t('Войти')}
                        </Button>
                    </VStack>
                }
            />
        </DynamicModuleLoader>
    );
});

export default LoginForm;
