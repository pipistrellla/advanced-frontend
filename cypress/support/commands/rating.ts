export const setRate = (
    starsCount: number = 5,
    feedback: string = 'test feedback',
) => {
    cy.getByTestId(`StarRating.${starsCount}`).click();
    cy.getByTestId('RatingCard.Input').type(feedback);
    cy.getByTestId('RatingCard.Send').click();
};

export const setRateWithoutFeedback = (starsCount: number = 5) => {
    cy.getByTestId(`StarRating.${starsCount}`).click();
    cy.getByTestId('RatingCard.Close').click();
};

declare global {
    namespace Cypress {
        interface Chainable {
            setRate(starsCount?: number, feedback?: string): Chainable<void>;
            setRateWithoutFeedback(starsCount?: number): Chainable<void>;
        }
    }
}
