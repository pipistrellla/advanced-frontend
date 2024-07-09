import {
    StateSchema,
    ReduxStoreWithManager,
    ThunkConfig,
    StateSchemaKey,
} from './config/StateSchema';
import { createReduxStore, AppDispatch } from './config/store';
import { StoreProvider } from './ui/StoreProvider';

export type {
    StateSchema,
    ReduxStoreWithManager,
    AppDispatch,
    ThunkConfig,
    StateSchemaKey,
};

export {
    StoreProvider,
    createReduxStore,
};
