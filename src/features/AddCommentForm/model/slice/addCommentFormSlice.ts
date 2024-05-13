import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { addCommentFormSchema } from '../types/addCommentForm';

const initialState: addCommentFormSchema = {
    text: '',
};
export const addCommentFormSlice = createSlice({
    name: 'addCommentFormSlice',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {

            state.text = action.payload;

        },
    },
    // extraReducers: (builder) => {

    //     builder
    //         .addCase(loginByUsername.pending, (state) => {

    //             state.error = undefined;
    //             state.isLoading = true;

    //         })
    //         .addCase(loginByUsername.fulfilled, (state, action) => {

    //             state.isLoading = false;

    //         })
    //         .addCase(loginByUsername.rejected, (state, action) => {

    //             state.isLoading = false;
    //             state.error = action.payload;

    //         });

    // },
});
export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
