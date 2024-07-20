import { User } from '../../../src/entitis/User';

export const addComment = (text: string = 'test text') => {
    cy.getByTestId('AddCommentForm.Input').clear().type(text);
    cy.getByTestId('AddCommentForm.Button').click();
};

declare global {
    namespace Cypress {
        interface Chainable {
            addComment(text?: string): Chainable<User>;
        }
    }
}
