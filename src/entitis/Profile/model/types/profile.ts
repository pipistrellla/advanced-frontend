import { Country } from 'entitis/Country/model/types/country';
import { Currency } from 'entitis/Currency/model/types/currency';

export interface Profile {
    first?: string,
    lastname?: string,
    age?: number,
    currency?:Currency,
    country?: Country,
    city?: string,
    username?: string,
    avatar?: string,
}

export enum ValidateProfileError {

    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_SECONDARY_DATA = 'INCORRECT_SECONDARY_DATA',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR'
}

export interface ProfileSchema {
    data?: Profile,
    form?: Profile
    isLoading: boolean,
    error?: string,
    readonly: boolean
    validateError?: ValidateProfileError[]
}
