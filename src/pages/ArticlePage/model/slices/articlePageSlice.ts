import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import {
    Article,
    ArticleSortField,
    ArticleType,
    ArticleView,
} from '@/entitis/Article';
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import { SortOrder } from '@/shared/types';
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
            _inited: false,
            sort: ArticleSortField.CREATED,
            limit: 9,
            search: '',
            order: 'asc',
            type: ArticleType.ALL,
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
        setOrder: (state, action: PayloadAction<SortOrder>) => {

            state.order = action.payload;

        },
        setSort: (state, action: PayloadAction<ArticleSortField>) => {

            state.sort = action.payload;

        },
        setSearch: (state, action: PayloadAction<string>) => {

            state.search = action.payload;

        },
        setType: (state, action: PayloadAction<ArticleType>) => {

            state.type = action.payload;

        },
        initState: (state) => {

            const view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleView;
            state.view = view;
            state.limit = view === ArticleView.BIG ? 4 : 9;
            state._inited = true;

        },
    },
    extraReducers: (builder) => {

        builder
            .addCase(fetchArticlesList.pending, (state, action) => {

                state.error = undefined;
                state.isLoading = true;

                if (action.meta.arg.replace)
                    articleAdapter.removeAll(state);

            })
            .addCase(fetchArticlesList.fulfilled, (state, action) => {

                state.isLoading = false;

                state.hasMore = action.payload.length >= state.limit;

                if (action.meta.arg.replace)
                    articleAdapter.setAll(state, action.payload);
                else
                    articleAdapter.addMany(state, action.payload);

            })
            .addCase(fetchArticlesList.rejected, (state, action) => {

                state.isLoading = false;
                state.error = action.payload;

            });

    },
});
export const { actions: articlePageActions } = articlePageSlice;
export const { reducer: articlePageReducer } = articlePageSlice;
