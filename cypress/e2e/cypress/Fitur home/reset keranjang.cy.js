describe('Fitur login', () => {
  it('User berhasil mereset keranjang', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('#react-burger-menu-btn').click()
    cy.get('[data-test="reset-sidebar-link"]').click()
  })
})