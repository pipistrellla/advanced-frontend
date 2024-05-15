import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticleView } from 'entitis/Article';
import { action } from '@storybook/addon-actions';
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { ArticlePageSchema } from '../types/ArticlePageSchema';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';

const articleAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticles = articleAdapter.getSelectors<StateSchema>(
    (state) => state.articlePage || articleAdapter.getInitialState(),
);

export const articlePageSlice = createSlice({
    name: 'articlePageSlice',
    initialState: articleAdapter.getInitialState<ArticlePageSchema>(
        {
            isLoading: false,
            error: undefined,
            ids: [],
            entities: {},
            view: ArticleView.SMALL,
            page: 1,
            hasMore: true,
        },
    ),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {

            state.view = action.payload;
            localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload);

        },
        setPage: (state, action: PayloadAction<number>) => {

            state.page = action.payload;

        },
        initState: (state) => {

            const view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleView;
            state.view = view;
            state.limit = view === ArticleView.BIG ? 4 : 9;

        },
    },
    extraReducers: (builder) => {

        builder
            .addCase(fetchArticlesList.pending, (state) => {

                state.error = undefined;
                state.isLoading = true;

            })
            .addCase(fetchArticlesList.fulfilled, (state, action) => {

                state.isLoading = false;
                articleAdapter.addMany(state, action.payload);
                state.hasMore = action.payload.length > 0;

            })
            .addCase(fetchArticlesList.rejected, (state, action) => {

                state.isLoading = false;
                state.error = action.payload;

            });

    },
});
export const { actions: articlePageActions } = articlePageSlice;
export const { reducer: articlePageReducer } = articlePageSlice;
