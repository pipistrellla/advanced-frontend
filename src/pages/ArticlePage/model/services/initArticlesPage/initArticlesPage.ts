import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { SortOrder } from '@/shared/types';
import { ArticleSortField, ArticleType } from '@/entitis/Article';
import {
    getArticlePageInited,
} from '../../selectors/articlesPageSelectors';
import { articlePageActions } from '../../slices/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

// в дженерик (что возвращаем, что принимаем , {при ошибке что вернем})
export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>(
    'articlePage/initArticlesPage',
    async (
        searchParams,
        thunkApi,
    ) => {

        const {
            getState,
            dispatch,
        } = thunkApi;

        const inited = getArticlePageInited(getState());

        if (!inited) {

            // автоподставка параметров в строку
            //  (желательно написать функцию, которая бы автоматизировала вс это дело)
            searchParams.forEach((value, key) => {

                switch (key) {
                case 'order':
                    dispatch(articlePageActions.setOrder(value as SortOrder));
                    break;
                case 'sort':
                    dispatch(articlePageActions.setSort(value as ArticleSortField));
                    break;
                case 'search':
                    dispatch(articlePageActions.setSearch(value));
                    break;
                case 'type':
                    dispatch(articlePageActions.setType(value as ArticleType));
                    break;
                default:
                    break;
                }

            });

            dispatch(articlePageActions.initState());
            dispatch(fetchArticlesList({}));

        }

    },
);
