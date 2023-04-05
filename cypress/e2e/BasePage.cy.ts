import { base64StringToBlob } from "blob-util";
import { BasePageElements } from "../Pages/BasePageElements";
import { Constants } from "../fixtures/Constants";
import ContactTestBase from "./ContactTestBase.cy";

let baseURL = Constants.baseURL
describe('Base Page UI and buttons functionality', () => {

  it('Should verify base pages UI', () => {
    cy.visit(baseURL);
    ContactTestBase.validateNavBarElements();
  })

})