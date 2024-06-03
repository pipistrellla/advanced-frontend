import { Country } from 'entitis/Country';
import { Currency } from 'entitis/Currency';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileError } from '../../types/editableProfileCardSchema';

const data = {
    age: 10,
    city: 'Ekaterinburg',
    username: 'test',
    lastname: 'test',
    country: Country.Russia,
    first: 'test',
    currency: Currency.JPY,
};

describe('validateProfileData.test', () => {

    test('Validate without errors', async () => {

        const result = validateProfileData(data);

        expect(result).toEqual([]);

    });

    test('with error INCORRECT_USER_DATA', async () => {

        const result = validateProfileData({ ...data, first: '' });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);

    });

    test('with error NO_DATA', async () => {

        const result = validateProfileData({ });

        expect(result).toStrictEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_SECONDARY_DATA,
        ]);

    });

    test('with error INCORRECT_AGE', async () => {

        const result = validateProfileData({ ...data, age: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);

    });

    test('with error INCORRECT_SECONDARY_DATA', async () => {

        const result = validateProfileData({ ...data, country: undefined, city: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_SECONDARY_DATA]);

    });

    test('with errors INCORRECT_AGE, INCORRECT_SECONDARY_DATA, INCORRECT_USER_DATA', async () => {

        const result = validateProfileData({
            ...data, age: undefined, city: undefined, first: undefined,
        });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_SECONDARY_DATA,
        ]);

    });

});
