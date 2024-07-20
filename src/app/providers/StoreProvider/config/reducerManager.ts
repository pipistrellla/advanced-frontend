import {
    AnyAction,
    Reducer,
    ReducersMapObject,
    combineReducers,
} from '@reduxjs/toolkit';

import { ReducerManager, StateSchema, StateSchemaKey } from './StateSchema';

export function createReducerManager(
    initialReducers: ReducersMapObject<StateSchema>,
): ReducerManager {
    // принимам дефолтные редюсеры
    const reducers = { ...initialReducers };

    let combinedReducer = combineReducers(reducers);
    // храним названия редюсеров которые хотим удалить
    let keysToRemove: StateSchemaKey[] = [];

    return {
        getReducerMap: () => reducers,
        // функция возвращает стейт а не другие редусеры, поэтому нужно указывать в интерфейсе тип
        // combinedState<StateSchema>
        // для получения смонтированных редусеров

        reduce: (state: StateSchema, action: AnyAction) => {
            //  просто удаляем все ключи из редусеров которые есть в массиве
            if (keysToRemove.length > 0) {
                state = { ...state };
                keysToRemove.forEach((key) => delete state[key]);
                keysToRemove = [];
            }
            // возвращаес без кдаленных ключей
            return combinedReducer(state, action);
        },

        add: (key: StateSchemaKey, reducer: Reducer) => {
            if (!key || reducers[key]) {return;}

            reducers[key] = reducer;

            combinedReducer = combineReducers(reducers);
        },

        remove: (key: StateSchemaKey) => {
            if (!key || !reducers[key]) {return;}

            delete reducers[key];

            keysToRemove.push(key);

            combinedReducer = combineReducers(reducers);
        },
    };
}
