import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import axios from 'axios';
import { User, userActions } from 'entitis/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

interface LoginByUsernameProps {
    username:string
    password: string
}

enum LoginErrors {
    INCORRECT_DATA = '',
    SERVER_ERROR = ''
}

// в дженерикек (что возвразаем, что принимаем , {при ошибке что вернем})
export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async (
        { username, password },
        thunkApi,
    ) => {

        const { extra, dispatch, rejectWithValue } = thunkApi;

        try {

            const response = await extra.api.post<User>(
                '/login',
                {
                    username,
                    password,
                },
            );

            if (!response.data)
                throw new Error();

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));
            extra.navigate('/about');
            return response.data;

        } catch (e) {

            console.log(e);
            return rejectWithValue('error');

        }

    },
);

// const loginByUsername = createAsyncThunk<User, LoginByUsernameProps>(
//     'login/loginByUsername',
//     async (authData) => {

//         const response = await axios.post(
//             'http://localhost:8000/login',
//             authData,
//         );
//         return response.data;

//     },
// );
