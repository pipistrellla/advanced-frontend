import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

import {
    getArticlePageHasMore,
    getArticlePageIsLoading,
    getArticlePagePageNumber,
} from '../../selectors/articlesPageSelectors';
import { articlePageActions } from '../../slices/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

// в дженерик (что возвращаем, что принимаем , {при ошибке что вернем})
export const fetchNextArticlePage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>('articlePage/fetchNextArticlePage', async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const hasMore = getArticlePageHasMore(getState());
    const page = getArticlePagePageNumber(getState());
    const isLoading = getArticlePageIsLoading(getState());

    if (hasMore && !isLoading) {
        dispatch(articlePageActions.setPage(page + 1));
        dispatch(fetchArticlesList({}));
    }
});
