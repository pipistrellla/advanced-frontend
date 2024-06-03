import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from 'entitis/Profile';
import { ValidateProfileError } from '../../types/editableProfileCardSchema';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfileData } from '../validateProfileData/validateProfileData';
// в дженерикек (что возвразаем, что принимаем , {при ошибке что вернем})
export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
    'profile/updateProfileData',
    async (
        _,
        thunkApi,
    ) => {

        const { extra, rejectWithValue, getState } = thunkApi;
        // внутри асинк фанков нужно использовать getState
        // для получения данных из селектора
        const formData = getProfileForm(getState());

        const errors = validateProfileData(formData);

        if (errors.length)
            return rejectWithValue(errors);

        try {

            const response = await extra.api.put<Profile>(
                `/profile/${formData?.id}`,
                formData,
            );

            if (!response.data)
                throw new Error();

            return response.data;

        } catch (e) {

            console.log(e);
            return rejectWithValue([ValidateProfileError.SERVER_ERROR]);

        }

    },
);
