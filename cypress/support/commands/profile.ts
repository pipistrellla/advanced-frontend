import { User } from '../../../src/entitis/User';

export const updateProfile = (firstname: string = 'change test data', lastname: string = 'change test data 2') => {

    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
    cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();

};

export const resetProfile = (profileId: string = '4') => {

    cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: 'asdasda' },
        body: {
            id: profileId,
            first: 'test User',
            lastname: 'user Test',
            age: 21,
            currency: 'JPY',
            country: 'Russia',
            city: 'Ekaterinburg',
            username: 'testUser',
            // eslint-disable-next-line max-len
            avatar: 'https://cdn.dribbble.com/users/17793/screenshots/16101765/media/beca221aaebf1d3ea7684ce067bc16e5.png',
        },
    });

};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstname?: string, lastname?: string): Chainable<User>;
            resetProfile(profileId?: string): Chainable<User>;
        }
    }
}
