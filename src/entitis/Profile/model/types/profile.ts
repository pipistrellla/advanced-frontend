import { Country } from 'entitis/Country/model/types/country';
import { Currency } from 'entitis/Currency/model/types/currency';

export interface Profile {
    id?: string
    first?: string,
    lastname?: string,
    age?: number,
    currency?:Currency,
    country?: Country,
    city?: string,
    username?: string,
    avatar?: string,
}
