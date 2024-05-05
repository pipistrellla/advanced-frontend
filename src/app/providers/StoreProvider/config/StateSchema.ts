import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entitis/Article';
import { CounterSchema } from 'entitis/Counter';
import { ProfileSchema } from 'entitis/Profile';
import { UserSchema } from 'entitis/User';
import { LoginSchema } from 'features/AuthByUsername';
import { NavigateOptions, To } from 'react-router-dom';

export interface StateSchema{
    counter:CounterSchema
    user: UserSchema

    // нижу будут все асинхронные редусеры
    loginForm?: LoginSchema
    profile?: ProfileSchema
    articleDetails?: ArticleDetailsSchema
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: ()=> ReducersMapObject<StateSchema>;
     // функция возвращает стейт а не другие редусеры, поэтому нужно указывать в интерфейсе тип
    // combinedState<StateSchema>
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema> ;
    add: (key:StateSchemaKey, reducer: Reducer) =>void;
    remove: (key:StateSchemaKey)=> void;
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
