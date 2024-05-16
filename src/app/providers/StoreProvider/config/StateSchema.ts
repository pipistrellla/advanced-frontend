import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entitis/Article';
import { CounterSchema } from 'entitis/Counter';
import { ProfileSchema } from 'entitis/Profile';
import { UserSchema } from 'entitis/User';
import { addCommentFormSchema } from 'features/AddCommentForm';
import { LoginSchema } from 'features/AuthByUsername';
import { ArticleDetailsCommentSchema } from 'pages/ArticleDetailsPage';
import { ArticlePageSchema } from 'pages/ArticlePage';
import { NavigateOptions, To } from 'react-router-dom';

export interface StateSchema{
    counter:CounterSchema
    user: UserSchema

    // ниже будут все асинхронные редусеры
    loginForm?: LoginSchema
    profile?: ProfileSchema
    articleDetails?: ArticleDetailsSchema
    articleDetailsComments?: ArticleDetailsCommentSchema
    addCommentForm?: addCommentFormSchema
    articlePage?: ArticlePageSchema
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = optionalRecord<StateSchemaKey, boolean>
export interface ReducerManager {
    getReducerMap: ()=> ReducersMapObject<StateSchema>;
     // функция возвращает стейт а не другие редусеры, поэтому нужно указывать в интерфейсе тип
    // combinedState<StateSchema>
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema> ;
    add: (key:StateSchemaKey, reducer: Reducer) =>void;
    remove: (key:StateSchemaKey)=> void;
    getMountedReducers:() => MountedReducers ;
}

// enhancedStore - старндарный тип который аозвращается при создании стора
export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
    ReducerManager: ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance;
    navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra:ThunkExtraArg;
    state: StateSchema
}
