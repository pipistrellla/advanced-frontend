import { Profile } from '@/entitis/Profile';

import { ValidateProfileError } from '../../consts/consts';

export const validateProfileData = (
    profile?: Profile,
): ValidateProfileError[] => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }

    const errors: ValidateProfileError[] = [];

    const { first, lastname, age, country, city, currency } = profile;

    if (!first || !lastname) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }

    if (!age || age < 0) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }

    if (!country || !city || !currency) {
        errors.push(ValidateProfileError.INCORRECT_SECONDARY_DATA);
    }

    return errors;
};
