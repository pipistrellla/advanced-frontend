import { StateSchema } from '@/app/providers/StoreProvider';

import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading.test', () => {
    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true,
            },
        };

        expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
    });

    test('should work with empty value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {},
        };

        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });
});
