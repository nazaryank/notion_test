import { AboutPageElements } from "../Pages/AboutPageElements";
import { BasePageElements } from "../Pages/BasePageElements";
import { CareInfoElements } from "../Pages/CareInfoPageElements";
import { Constants } from "../fixtures/Constants";
import ContactTestBase from "./ContactTestBase.cy";

describe("About page UI",  () => {


    before(() => {
        cy.visit(Constants.baseURL);
        ContactTestBase.validateNavBarElements();
    })


    it ("should verify About page UI", () => {
        BasePageElements.navButtons("About").click();
        CareInfoElements.headerSection().should("contain.text", "About");
        AboutPageElements.firstImage()
        .should("contain.html", `img src="//cdn.shopify.com/s/files/1/1048/9338/files/IMG_1836_large.JPG?17508961879441178503" alt=""`);
        AboutPageElements.weAreMakers().should("contain.text", "We are makers");
        AboutPageElements.secondImage()
        .should("contain.html", `img src="//cdn.shopify.com/s/files/1/1048/9338/files/IMG_1836_large.JPG?17508961879441178503" alt=""`);
    })
})