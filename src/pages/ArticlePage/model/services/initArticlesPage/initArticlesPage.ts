import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getArticlePageInited,
} from '../../selectors/articlesPageSelectors';
import { articlePageActions } from '../../slices/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

// в дженерик (что возвращаем, что принимаем , {при ошибке что вернем})
export const initArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>(
    'articlePage/initArticlesPage',
    async (
        _,
        thunkApi,
    ) => {

        const {
            getState,
            dispatch,
        } = thunkApi;

        const inited = getArticlePageInited(getState());

        if (!inited) {

            dispatch(articlePageActions.initState());
            dispatch(fetchArticlesList(
                {
                    page: 1,
                },
            ));

        }

    },
);
