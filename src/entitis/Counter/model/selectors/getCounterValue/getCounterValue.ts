import { buildSelector } from '@/shared/lib/store';

// использование reSelect
// export const getCounterValue = createSelector(
//     getCounter,
//     (counter: CounterSchema) => counter.value,
// );

export const [useCounterValue, getCounterValue] = buildSelector(
    (state) => state.counter.value,
);
