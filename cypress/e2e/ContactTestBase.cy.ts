import { BasePageElements } from "../Pages/BasePageElements";

export default class ContactTestBase {
    static validateNavBarElements(): void {
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
    }
}