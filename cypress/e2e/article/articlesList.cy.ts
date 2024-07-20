describe('Пользователь заходят на страницу со списком статей', () => {
    beforeEach(() => {
        cy.login().then((data) => {
            cy.visit('articles');
        });
    });
    // TODO
    // дописать тейст кейсы на сортировку
    // .skip для пропуска теста

    describe('Работа с API', () => {
        it('Список статей получен', () => {
            cy.getByTestId('ArticleList').should('exist');
            cy.getByTestId('ArticleListItem').should(
                'have.length.greaterThan',
                3,
            );
        });
        it('Статья найдена', () => {
            cy.getByTestId('ArticleList').should('exist');
            cy.getByTestId('ArticleListItem').should(
                'have.length.greaterThan',
                3,
            );
        });
    });

    describe('С фикстурами', () => {
        it('Статья найдена на стабах', () => {
            cy.intercept('GET', '**/articles?*', {
                fixture: 'article-list.json',
            });
            cy.getByTestId('ArticleList').should('exist');
            cy.getByTestId('ArticleListItem').should(
                'have.length.greaterThan',
                3,
            );
        });
    });
});
