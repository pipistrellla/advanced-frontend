import { counterReducer } from './model/slice/CounterSlice';
import Counter from './ui/Counter';
import { CounterSchema } from './model/types/counterSchema';

export {
    counterReducer,
    Counter,
};

export type {
    CounterSchema,
};
