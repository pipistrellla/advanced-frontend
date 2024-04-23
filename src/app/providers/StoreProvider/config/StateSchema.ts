import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { CounterSchema } from 'entitis/Counter';
import { UserSchema } from 'entitis/User';
import { LoginSchema } from 'features/AuthByUsername';

export interface StateSchema{
    counter:CounterSchema
    user: UserSchema

    // нижу будут все асинхронные редусеры
    loginForm?: LoginSchema
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