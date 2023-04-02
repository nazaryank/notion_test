"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePageElements = void 0;
var BasePageElements = /** @class */ (function () {
    function BasePageElements() {
    }
    BasePageElements.searchButton = function () {
        return cy.get(".search-header__submit");
    };
    BasePageElements.shopIcon = function () {
        return cy.get(".icon-cart");
    };
    BasePageElements.navButtons = function (name) {
        return cy.get("[class*=\"site-nav\"]").contains(name);
    };
    return BasePageElements;
}());
exports.BasePageElements = BasePageElements;
