import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entitis/Counter';
import { userReducer } from 'entitis/User';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {

    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });

}
