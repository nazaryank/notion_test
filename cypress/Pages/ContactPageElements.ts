export class ContactPageElements {
    static descriptionArea(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(".rte");
    } 
}