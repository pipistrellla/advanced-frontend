import {
    CombinedState, Reducer, ReducersMapObject, configureStore, getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { counterReducer } from 'entitis/Counter';
import { userReducer } from 'entitis/User';
import { $api } from 'shared/api/api';
import { To, NavigateOptions } from 'react-router-dom';
import { StateSchema, ThunkExtraArg } from './StateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void,
) {

    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducer);

    const extraArg : ThunkExtraArg = {
        api: $api,
        navigate,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }),
    });

    // @ts-ignore
    store.ReducerManager = reducerManager;

    return store;

}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
