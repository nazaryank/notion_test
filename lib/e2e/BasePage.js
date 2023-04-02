"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BasePageElements_1 = require("../Pages/BasePageElements");
describe('Base Page UI and buttons functionality', function () {
    it('Should verify base pages UI and existing buttons functionality', function () {
        cy.visit('https://newtonsupplyco.com/pages/contact');
        BasePageElements_1.BasePageElements.searchButton().should("be.visible");
        BasePageElements_1.BasePageElements.shopIcon().should("be.visible");
        BasePageElements_1.BasePageElements.navButtons("Home").should("be.visible");
    });
});
