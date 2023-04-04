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

    static headerLogo(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(".site-header__logo-image.site-header__logo-image--centered");
    }

    static subscribtionField(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(".input-group__field.newsletter__input").last();
    }

    static subscribeButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(".newsletter__submit-text--large").last();
    }

    static faceBookIcon(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(".icon.icon-facebook");
    }

    static instagramIcon(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(".icon.icon-instagram");    
    }

    static subscribtionConfirmation(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(".form--success");
    }

}