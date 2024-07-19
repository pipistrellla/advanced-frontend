describe('Пользователь перешел на страницу статьи', () => {

    beforeEach(() => {

        cy.login();
        cy.createArticle().then((article) => {

            cy.visit(`/articles/${article.id}`);

        });

    });

    afterEach(() => {

        cy.removeArticle();

    });

    describe('Работа с API', () => {

        it('статья загружена', () => {

            cy.getByTestId('ArticleDetails').should('exist');
            cy.getByTestId('ArticleDetails.Info').should('exist');

        });

        it('список рекомендаций загружен', () => {

            cy.getByTestId('ArticleRecommendationsList').should('exist');

        });

        it('Пользователь отправляет комментарий', () => {

            cy.getByTestId('ArticleDetails.Info').should('exist');
            cy.getByTestId('AddCommentForm').scrollIntoView();
            cy.addComment();
            cy.getByTestId('CommentCard.Content').should('have.length', 1);

            cy.addComment('text test');
            cy.getByTestId('CommentCard.Content').should('have.length', 2);

        });

        it('Пользователь оставляет оценку', () => {

            cy.getByTestId('ArticleDetails.Info').should('exist');
            cy.getByTestId('RatingCard').scrollIntoView();
            cy.setRate();
            cy.get('[data-selected=true]').should('have.length', 5);

        });

        it('Пользователь оставляет оценку без отзыва', () => {

            cy.getByTestId('ArticleDetails.Info').should('exist');
            cy.getByTestId('RatingCard').scrollIntoView();
            cy.setRateWithoutFeedback();
            cy.get('[data-selected=true]').should('have.length', 5);

        });

    });

    describe('С фикстурами', () => {

        it('Пользователь оставляет оценку без отзыва (замоканный)', () => {

            cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' });
            cy.getByTestId('ArticleDetails.Info').should('exist');
            cy.getByTestId('RatingCard').scrollIntoView();
            cy.setRateWithoutFeedback();
            cy.get('[data-selected=true]').should('have.length', 5);

        });

    });

});
