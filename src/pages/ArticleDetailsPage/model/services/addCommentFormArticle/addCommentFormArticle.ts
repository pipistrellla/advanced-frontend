import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getUserAuthData } from 'entitis/User';
import { getArticleDetailsData } from 'entitis/Article/model/selectors/articleDetails';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

enum LoginErrors {
    INCORRECT_DATA = '',
    SERVER_ERROR = ''
}

// в дженерикек (что возвразаем, что принимаем , {при ошибке что вернем})
export const addCommentFormArticle = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
>(
    'articleDetails/addCommentFormArticle',
    async (
        text,
        thunkApi,
    ) => {

        const {
            extra, dispatch, rejectWithValue, getState,
        } = thunkApi;
        const userData = getUserAuthData(getState());
        const article = getArticleDetailsData(getState());

        if (!userData || !article || !text)
            return rejectWithValue('no data');

        try {

            const response = await extra.api.post<Comment>(
                '/comments',
                {
                    articleId: article.id,
                    userId: userData.id,
                    text,
                },
            );
            if (!response.data)
                throw new Error();

            dispatch(fetchCommentsByArticleId(article.id));

            return response.data;

        } catch (e) {

            console.log(e);
            return rejectWithValue('error');

        }

    },
);
