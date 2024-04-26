import axios from 'axios';
import { Dispatch } from 'react';
import { StateSchema } from 'app/providers/StoreProvider';
import { userActions } from 'entitis/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunc';
import { loginByUsername } from './loginByUsername';

describe('loginByUsername.test', () => {

    // при такой реализации можно не использовать before each,
    // так как в каждо тесте будет свой диспатч и гет стейт
    // потому что в каждом тесте создается свой обьект
    test('success login', async () => {

        const thunk = new TestAsyncThunk(loginByUsername);
        const userValue = { username: '123', id: '1' };
        thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));

        const result = await thunk.callThunk({ username: '123', password: '123' });

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userValue);

    });

    test('error login', async () => {

        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk({ username: '123', password: '123' });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');

    });

    // так можно делать если не выносить логику по асинхронным вытягивания в отдельный файл
    // let dispatch: Dispatch;
    // let getState: () => StateSchema;

    // beforeEach(() => {

    //     dispatch = jest.fn();
    //     getState = jest.fn();

    // });
    // test('should be succesfull login', async () => {

    //     const userValue = { username: '123', id: '1' };
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

    //     const action = loginByUsername({ username: '123', password: '123' });
    //     const result = await action(dispatch, getState, undefined);

    //     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    //     expect(dispatch).toHaveBeenCalledTimes(3);
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toBe('fulfilled');
    //     expect(result.payload).toStrictEqual(userValue);

    // });

    // test('should be error login', async () => {

    //     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

    //     const action = loginByUsername({ username: '123', password: '123' });
    //     const result = await action(dispatch, getState, undefined);

    //     expect(dispatch).toHaveBeenCalledTimes(2);
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toBe('rejected');
    //     expect(result.payload).toBe('error');

    // });

});
