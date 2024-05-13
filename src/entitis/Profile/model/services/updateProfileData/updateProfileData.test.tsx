import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunc';
import { Country } from 'entitis/Country';
import { Currency } from 'entitis/Currency';
import { updateProfileData } from './updateProfileData';
import { ValidateProfileError } from '../../types/profile';

const data = {
    age: 10,
    city: 'Ekaterinburg',
    username: 'test',
    lastname: 'test',
    country: Country.Russia,
    first: 'test',
    currency: Currency.JPY,
    id: '1',
};

describe('updateProfileData.test', () => {

    test('success update', async () => {

        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);

    });

    test('error SERVER_ERROR', async () => {

        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            ValidateProfileError.SERVER_ERROR,
        ]);

    });

    test('error INCORRECT_USER_DATA', async () => {

        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: { ...data, lastname: '' },
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);

    });

});
