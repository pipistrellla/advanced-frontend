import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entitis/Country';
import { Currency } from '@/entitis/Currency';

import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    test('should return error', () => {
        const data = {
            age: 10,
            city: 'Ekaterinburg',
            username: 'test',
            lastname: 'test',
            country: Country.Russia,
            first: 'test',
            currency: Currency.JPY,
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty data', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
