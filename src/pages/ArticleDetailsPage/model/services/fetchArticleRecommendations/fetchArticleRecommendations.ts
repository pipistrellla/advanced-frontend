import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entitis/Article';

// в дженериек (что возвращаем, что принимаем , {при ошибке что вернем})
export const fetchArticlesRecommendations = createAsyncThunk<
    Article[],
    void,
    ThunkConfig<string>
>(
    'articlePage/fetchArticlesRecommendations',
    async (
        _,
        thunkApi,
    ) => {

        const { extra, rejectWithValue, getState } = thunkApi;

        try {

            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: 4,
                },
            });

            if (!response.data)
                throw new Error();

            return response.data;

        } catch (e) {

            console.log(e);
            return rejectWithValue('error');

        }

    },
);
