describe('Fitur login', () => {
  it('User berhasil membuka detail barang', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="inventory-item-test.allthethings()-t-shirt-(red)-img"]').click()
  })
})