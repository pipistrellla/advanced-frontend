describe('Пользователь заходят на страницу со списком статей', () => {

    beforeEach(() => {

        cy.login().then((data) => {

            cy.visit('articles');

        });

    });
    // TODO
    // дописать тейст кейсы на сортировку
    it('Список статей получен', () => {

        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);

    });
    it('Статья найдена', () => {

    });

});
