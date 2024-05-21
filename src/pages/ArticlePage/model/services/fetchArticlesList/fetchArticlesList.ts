import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article, ArticleType } from 'entitis/Article';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';
import {
    getArticlePageLimit,
    getArticlePageOrder,
    getArticlePagePageNumber,
    getArticlePageSearch,
    getArticlePageSort,
    getArticlePageType,
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
        const type = getArticlePageType(getState());

        try {

            addQueryParams({
                sort,
                order,
                search,
                type,
            });
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                    _sort: sort,
                    _order: order,
                    q: search,
                    type: type === ArticleType.ALL ? undefined : type,
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
