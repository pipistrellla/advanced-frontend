import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';
// в дженерикек (что возвразаем, что принимаем , {при ошибке что вернем})
export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (
        _,
        thunkApi,
    ) => {

        const { extra, rejectWithValue } = thunkApi;

        try {

            const response = await extra.api.get<Profile>(
                '/profile',
            );

            return response.data;

        } catch (e) {

            console.log(e);
            return rejectWithValue('error');

        }

    },
);