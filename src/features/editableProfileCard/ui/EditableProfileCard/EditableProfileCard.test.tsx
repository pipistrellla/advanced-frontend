import { fireEvent, screen } from '@testing-library/react';
import { ComponentRender } from 'shared/lib/tests/ComponentRender/ComponentRender';
import { Profile } from 'entitis/Profile';
import { Currency } from 'entitis/Currency';
import { Country } from 'entitis/Country';
import userEvent from '@testing-library/user-event';
import { $api } from 'shared/api/api';
import {
    profileReducer,
} from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const testProfileData: Profile = {
    id: '1',
    first: 'admin',
    lastname: 'admin',
    age: 21,
    currency: Currency.JPY,
    country: Country.Japanese,
    city: 'Osaka',
    username: 'trueAdmin',
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: testProfileData,
            form: testProfileData,
        },
        user: {
            authData: {
                id: '1',
                username: 'admin',
            },
        },
    },
    asyncReducers: { profile: profileReducer },
};
// можно использовать before each
describe('feature/EditableProfileCard', () => {

    test('change from readOnly', async () => {

        ComponentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();

    });

    test('on cancel data returns to start data', async () => {

        ComponentRender(<EditableProfileCard id="1" />, options);

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');
        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user');

        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));
        await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'user');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('user');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('admin');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('admin');

    });

    test('should error appear', async () => {

        ComponentRender(<EditableProfileCard id="1" />, options);

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();

    });

    test('should save data', async () => {

        const mockPutRequest = jest.spyOn($api, 'put');
        ComponentRender(<EditableProfileCard id="1" />, options);

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');
        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user');

        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));
        await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'user');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('user');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));
        expect(mockPutRequest).toHaveBeenCalled();

    });

});
