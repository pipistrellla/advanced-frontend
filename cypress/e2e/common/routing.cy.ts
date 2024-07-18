import { selectByDataTestId } from 'cypress/helpers/selectByDataTestId';

describe('Роутинг', () => {

    describe('Пользователь авторизован', () => {

        it('Открытие недоступной страницы ', () => {

            cy.login('user', '123');
            cy.visit('/admin');
            cy.get(selectByDataTestId('ForbiddenPage')).should('exist');

        });

        beforeEach(() => {

            cy.login();

        });

        it('Открытие главной страницы', () => {

            cy.visit('/');
            cy.get(selectByDataTestId('MainPage')).should('exist');

        });
        it('Открытие профиля', () => {

            cy.visit('/profile/2');
            cy.get(selectByDataTestId('ProfilePage')).should('exist');

        });
        it('Открытие списка статей', () => {

            cy.visit('/articles');
            cy.get(selectByDataTestId('ArticlesPage')).should('exist');

        });
        it('Открытие несуществующей страницы', () => {

            cy.visit('/adwasdasda');
            cy.get(selectByDataTestId('NotFoundPage')).should('exist');

        });

    });

    describe('Пользователь не авторизован', () => {

        it('Открытие главной страницы', () => {

            cy.visit('/');
            cy.get(selectByDataTestId('MainPage')).should('exist');

        });
        it('Открытие редирект на главную страницу', () => {

            cy.visit('/profile/1');
            cy.get(selectByDataTestId('MainPage')).should('exist');

        });
        it('Открытие несуществующей страницы', () => {

            cy.visit('/adwasdasda');
            cy.get(selectByDataTestId('NotFoundPage')).should('exist');

        });
        it('Открытие недоступной страницы (редирект на главную)', () => {

            cy.visit('/admin');
            cy.get(selectByDataTestId('MainPage')).should('exist');

        });

    });

});
