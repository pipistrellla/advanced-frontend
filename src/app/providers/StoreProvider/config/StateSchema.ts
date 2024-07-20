import {
    AnyAction,
    CombinedState,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { NavigateOptions, To } from 'react-router-dom';

import { ArticleDetailsSchema } from '@/entitis/Article';
import { CounterSchema } from '@/entitis/Counter';
import { UserSchema } from '@/entitis/User';
import { addCommentFormSchema } from '@/features/AddCommentForm';
import { LoginSchema } from '@/features/AuthByUsername';
import { ProfileSchema } from '@/features/editableProfileCard';
import { ScrollPositionSaveSchema } from '@/features/ScrollPositionSave';
import { ArticleDetailsPageSchema } from '@/pages/ArticleDetailsPage';
import { ArticlePageSchema } from '@/pages/ArticlePage';
import { rtkApi } from '@/shared/api/rtkApi';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    scrollPosition: ScrollPositionSaveSchema;

    // rtk
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

    // ниже будут все асинхронные редусеры
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailsSchema;
    addCommentForm?: addCommentFormSchema;
    articlePage?: ArticlePageSchema;
    articleDetailsPage?: ArticleDetailsPageSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = optionalRecord<StateSchemaKey, boolean>;
export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    // функция возвращает стейт а не другие редусеры, поэтому нужно указывать в интерфейсе тип
    // combinedState<StateSchema>
    reduce: (
        state: StateSchema,
        action: AnyAction,
    ) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

// enhancedStore - старндарный тип который аозвращается при создании стора
export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    ReducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
    navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
