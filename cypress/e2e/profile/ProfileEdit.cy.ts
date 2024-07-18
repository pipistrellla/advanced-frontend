describe('пользователь заходит на страницу пользователя', () => {

    beforeEach(() => {

        cy.visit('');
        cy.login().then((data) => {

            cy.visit(`/profile/${data.id}`);

        });

    });

    afterEach(() => {

        cy.resetProfile();

    });

    it('Профиль успешно загружается', () => {

        cy.getByTestId('ProfilePage').should('exist');
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'test User');
        cy.getByTestId('ProfileCard.lastname').should('have.value', 'user Test');

    });

    it('редактирование профиля', () => {

        cy.updateProfile();
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'change test data');
        cy.getByTestId('ProfileCard.lastname').should('have.value', 'change test data 2');

    });

});
