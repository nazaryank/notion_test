export class BasePageElements {

    static searchButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(".search-header__submit");
    }

    static shopIcon(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(".icon-cart"); 
    }

    static navButtons(name: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(`[class*="site-nav"]`).contains(name);
    }

}