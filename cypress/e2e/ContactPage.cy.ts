import { BasePageElements } from "../Pages/BasePageElements";
import { ContactPageElements } from "../Pages/ContactPageElements";
import { Constants } from '../fixtures/Constants';
import ContactTestBase from './ContactTestBase.cy';

describe ("Contact page", () => {
    before(()=> {
        cy.visit(Constants.baseURL);
        ContactTestBase.validateNavBarElements();
    })

    it("should verify Contact page UI and buttons functionality", () => {
        BasePageElements.navButtons("Contact").click();
        cy.url().should("eq", "https://newtonsupplyco.com/pages/contact");
        ContactPageElements.descriptionArea()
        .should("contain.text", "\n        Questions about a product?\nWant some wholesale information?\nWe're happy to help! Get in touch at info@newtonsupplyco.com.\n      ");
    })






})