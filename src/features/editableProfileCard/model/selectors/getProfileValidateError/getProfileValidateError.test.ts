import { StateSchema } from '@/app/providers/StoreProvider';

import { getProfileValidateError } from './getProfileValidateError';
import { ValidateProfileError } from '../../consts/consts';

describe('getProfileValidateError.test', () => {
    test('should return SERVER_ERROR', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError: [ValidateProfileError.SERVER_ERROR],
            },
        };
        expect(getProfileValidateError(state as StateSchema)).toEqual([
            ValidateProfileError.SERVER_ERROR,
        ]);
    });
    test('should work with empty data', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateError(state as StateSchema)).toEqual(
            undefined,
        );
    });

    test('should return all 3 form errors', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError: [
                    ValidateProfileError.INCORRECT_AGE,
                    ValidateProfileError.INCORRECT_SECONDARY_DATA,
                    ValidateProfileError.INCORRECT_USER_DATA,
                ],
            },
        };
        expect(getProfileValidateError(state as StateSchema)).toEqual([
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_SECONDARY_DATA,
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });

    test('should return all NO_DATA', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError: [ValidateProfileError.NO_DATA],
            },
        };
        expect(getProfileValidateError(state as StateSchema)).toEqual([
            ValidateProfileError.NO_DATA,
        ]);
    });
});
