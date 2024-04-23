import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entitis/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

interface LoginByUsernameProps {
    username:string
    password: string
}

enum LohinErrors {
    INCORRECT_DATA = '',
    SERVER_ERROR = ''
}

// в дженерикек (что возвразаем, что принимаем , {при ошибке что вернем})
export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, {rejectValue: string}>(
    'login/loginByUsername',
    async ({ username, password }, thunkAPI) => {

        try {

            const response = await axios.post<User>(
                'http://localhost:8000/login',
                {
                    username,
                    password,
                },
            );

            if (!response.data)
                throw new Error();

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));
            return response.data;

        } catch (e) {

            console.log(e);
            return thunkAPI.rejectWithValue('error');

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
