import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunc';
import { Country } from '@/entitis/Country';
import { Currency } from '@/entitis/Currency';
import { fetchProfileData } from './fetchProfileData';

const data = {
    age: 10,
    city: 'Ekaterinburg',
    username: 'test',
    lastname: 'test',
    country: Country.Russia,
    first: 'test',
    currency: Currency.JPY,
};

describe('fetchProfileData.test', () => {

    test('success fetch', async () => {

        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);

    });

    test('error login', async () => {

        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected');

    });

});
