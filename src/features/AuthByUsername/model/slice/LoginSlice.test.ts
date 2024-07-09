import { LoginActions, LoginReducer } from './LoginSlice';
import { LoginSchema } from '../types/loginSchema';

describe('LoginSlice.test', () => {

    test('test set username', () => {

        const state:DeepPartial<LoginSchema> = { username: '123' };
        expect(LoginReducer(
            state as LoginSchema,
            LoginActions.setUsername('123321'),
        )).toEqual({ username: '123321' });

    });
    test('test set password', () => {

        const state:DeepPartial<LoginSchema> = { password: '123' };
        expect(LoginReducer(
            state as LoginSchema,
            LoginActions.setPassword('123321'),
        )).toEqual({ password: '123321' });

    });

});
