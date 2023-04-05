import { BasePageElements } from "../Pages/BasePageElements";
import { CareInfoElements } from "../Pages/CareInfoPageElements";
import { Constants } from "../fixtures/Constants"
import ContactTestBase from './ContactTestBase.cy';

describe ("custom page UI", () => {
     before(()=> {
        cy.visit(Constants.baseURL);
        ContactTestBase.validateNavBarElements();
     })

     it("Should verify Custom page UI", () => {
        BasePageElements.navButtons("Custom").click();
        CareInfoElements.headerSection().should("contain.text", "Custom");
     })
})