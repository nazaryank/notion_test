import { BasePageElements } from "../Pages/BasePageElements";
import { CareInfoElements } from "../Pages/CareInfoPageElements";
import { Constants } from "../fixtures/Constants";
import ContactTestBase from './ContactTestBase.cy';



describe("CareInfo page UI", () => {


    before(()=> {
        cy.visit(Constants.baseURL);
        ContactTestBase.validateNavBarElements();
    })

    it ("should verify CareInfo page UI", ()=> {
        BasePageElements.navButtons("FAQs + Care Info").click();
        CareInfoElements.headerSection().should("contain.text", "FAQs + Care Info");
        
    })
})