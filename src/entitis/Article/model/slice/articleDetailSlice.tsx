import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { Article } from '../types/article';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';

const initialState : ArticleDetailsSchema = {
    data: undefined,
    error: undefined,
    isLoading: false,
};
export const articleDetailSlice = createSlice({
    name: 'articleDetailSlice',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {

        builder
            .addCase(fetchArticleById.pending, (state) => {

                state.error = undefined;
                state.isLoading = true;

            })
            .addCase(
                fetchArticleById.fulfilled,
                (
                    state,
                    action: PayloadAction<Article>,
                ) => {

                    state.isLoading = false;
                    state.data = action.payload;

                },
            )
            .addCase(fetchArticleById.rejected, (state, action) => {

                state.isLoading = false;
                state.error = action.payload;

            });

    },
});
export const { actions: articleDetailActions } = articleDetailSlice;
export const { reducer: articleDetailReducer } = articleDetailSlice;
