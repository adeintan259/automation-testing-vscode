import LoginPage from "./cypress/support/Objek Model/ObjectLoginPage/LoginPage";

const detailLoginPage = new LoginPage();

describe('Fitur login', () => {
  it('User berhasil membuka detail barang', () => {
    cy.visit('https://www.saucedemo.com/')
detailLoginPage.login('standard_user', 'secret_sauce')

  })
})