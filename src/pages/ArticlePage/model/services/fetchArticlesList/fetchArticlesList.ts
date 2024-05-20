import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entitis/Article';
import {
    getArticlePageLimit,
    getArticlePageOrder,
    getArticlePagePageNumber,
    getArticlePageSearch,
    getArticlePageSort,
} from '../../selectors/articlesPageSelectors';

interface FetchArticleListProps {
    replace?: boolean
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

        const limit = getArticlePageLimit(getState());
        const sort = getArticlePageSort(getState());
        const order = getArticlePageOrder(getState());
        const search = getArticlePageSearch(getState());
        const page = getArticlePagePageNumber(getState());

        try {

            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                    _sort: sort,
                    _order: order,
                    q: search,
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
