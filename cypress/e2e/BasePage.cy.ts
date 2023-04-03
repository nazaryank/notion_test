import { BasePageElements } from "../Pages/BasePageElements";

describe('Base Page UI and buttons functionality', () => {
  it('Should verify base pages UI and existing buttons functionality', () => {
    cy.visit('https://newtonsupplyco.com/pages/contact');
    BasePageElements.searchButton().should("be.visible");
    BasePageElements.shopIcon().should("be.visible");
    BasePageElements.navButtons("Home").should("be.visible");
  })
})