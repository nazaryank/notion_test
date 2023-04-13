export class AboutPageElements {
    static firstImage(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(".text-align-center");
    }

    static weAreMakers(): Cypress.Chainable<JQuery<HTMLParagraphElement>> {
        return cy.get(".sqs-block-content").children('p');
    }

    static secondImage(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(".sqs-block-content");
    }
}