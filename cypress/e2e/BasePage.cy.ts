import { base64StringToBlob } from "blob-util";
import { BasePageElements } from "../Pages/BasePageElements";

describe('Base Page UI and buttons functionality', () => {

  it('Should verify base pages UI', () => {
    cy.visit('https://newtonsupplyco.com');
    BasePageElements.headerLogo().should("be.visible");
    BasePageElements.searchButton().should("be.visible");
    BasePageElements.shopIcon().should("be.visible");
    BasePageElements.navButtons("Home").should("be.visible");
    BasePageElements.navButtons("Shop").should("be.visible");
    BasePageElements.navButtons("About Us").should("be.visible");
    BasePageElements.navButtons("Stockists").should("be.visible");
    BasePageElements.navButtons("Custom").should("be.visible");
    BasePageElements.navButtons("FAQs + Care Info").should("be.visible");
    BasePageElements.navButtons("Contact").should("be.visible");
  })

})