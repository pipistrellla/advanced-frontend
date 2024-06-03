import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entitis/Country';
import { Currency } from 'entitis/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {

    test('should return data', () => {

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
                form: data,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);

    });
    test('should work with empty data', () => {

        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);

    });

});
