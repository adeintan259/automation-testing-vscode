describe('Fitur login', () => {
  it('User berhasil hapus keranjang', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('#react-burger-menu-btn').click()
cy.get('[data-test="logout-sidebar-link"]').click()
})
})
