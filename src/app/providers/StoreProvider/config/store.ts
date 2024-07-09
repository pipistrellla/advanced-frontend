import {
    CombinedState, Reducer, ReducersMapObject, configureStore,
} from '@reduxjs/toolkit';

import { counterReducer } from '@/entitis/Counter';
import { userReducer } from '@/entitis/User';
import { ScrollPositionSaveReducer } from '@/features/ScrollPositionSave';
import { $api } from '@/shared/api/api';
import { rtkApi } from '@/shared/api/rtkApi';

import { createReducerManager } from './reducerManager';
import { StateSchema, ThunkExtraArg } from './StateSchema';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {

    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        scrollPosition: ScrollPositionSaveReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
    };

    const reducerManager = createReducerManager(rootReducer);

    const extraArg : ThunkExtraArg = {
        api: $api,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }).concat(rtkApi.middleware),
    });

    // @ts-ignore
    store.ReducerManager = reducerManager;

    return store;

}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
