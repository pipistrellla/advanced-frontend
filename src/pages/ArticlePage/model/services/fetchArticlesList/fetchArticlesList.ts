import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entitis/Article';
import { getArticlePageLimit } from '../../selectors/articlesPageSelectors';

interface FetchArticleListProps {
    page?: number
}

// в дженериек (что возвращаем, что принимаем , {при ошибке что вернем})
export const fetchArticlesList = createAsyncThunk<
    Article[],
    FetchArticleListProps,
    ThunkConfig<string>
>(
    'articlePage/fetchArticlesList',
    async (
        args,
        thunkApi,
    ) => {

        const { extra, rejectWithValue, getState } = thunkApi;
        const {
            page = 1,
        } = args;
        const limit = getArticlePageLimit(getState());
        try {

            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
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
