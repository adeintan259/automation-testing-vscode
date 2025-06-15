import PengisianData from "./cypress/support/Objek Model/ObjectLoginPage/PengisianData";

const detailLoginPage = new PengisianData();
const detailData = new PengisianData();

describe('Fitur login', () => {
  it('User berhasil membuka detail barang dan checkout', () => {
    cy.visit('https://www.saucedemo.com/')
    
    // Login
    detailLoginPage.login('standard_user', 'secret_sauce');

    // Tambahkan backpack ke keranjang
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.get('[data-test="checkout"]').click();

    // Isi data checkout
    detailData.isiDataCheckout('Ade', 'Intan','10000');

    // Verifikasi item masuk keranjang
    cy.get('.shopping_cart_badge').should('contain', '1');
  });
});