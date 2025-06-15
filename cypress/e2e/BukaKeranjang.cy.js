import BukaKeranjang from "./cypress/support/Objek Model/ObjectLoginPage/BukaKeranjang";
const detailLoginPage = new BukaKeranjang();

describe('Fitur login', () => {
  it('User berhasil membuka detail barang', () => {
    cy.visit('https://www.saucedemo.com/')
detailLoginPage.login('standard_user', 'secret_sauce')
    // Tambahkan backpack ke keranjang
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="shopping-cart-link"]').click();

    // Verifikasi item masuk keranjang
    cy.get('.shopping_cart_badge').should('contain', '1');
  })
})