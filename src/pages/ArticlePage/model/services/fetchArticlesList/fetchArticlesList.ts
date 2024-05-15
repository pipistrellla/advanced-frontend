import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entitis/Article';

// в дженерикек (что возвразаем, что принимаем , {при ошибке что вернем})
export const fetchArticlesList = createAsyncThunk<
    Article[],
    void,
    ThunkConfig<string>
>(
    'articelPage/fetchArticlesList',
    async (
        articleId,
        thunkApi,
    ) => {

        const { extra, rejectWithValue } = thunkApi;

        try {

            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
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
