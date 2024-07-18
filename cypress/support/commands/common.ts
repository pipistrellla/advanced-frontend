import { selectByDataTestId } from 'cypress/helpers/selectByDataTestId';

import { User } from '../../../src/entitis/User';
import { USER_LOCALSTORAGE_KEY } from '../../../src/shared/const/localStorage';

export const login = (username: string = 'testUser', password: string = '123') => {

    cy.request({
        method: 'POST',
        url: 'http://localhost:8000/login',
        body: {
            username,
            password,
        },
    }).then(({ body }) => {

        window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body));
        return body;

    });

};

export const getByTestId = (testId: string) => cy.get(selectByDataTestId(testId));

declare global {
    namespace Cypress {
        interface Chainable {
            login(email?: string, password?: string): Chainable<User>;
            getByTestId(testId: string): ReturnType<typeof cy.get>;
        }
    }
}
