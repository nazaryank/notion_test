export class CareInfoElements{
 static headerSection(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(".section-header.text-center");
 }

 static descriptionSection(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(".rte");
 }

}