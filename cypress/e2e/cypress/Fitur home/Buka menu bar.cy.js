describe('Fitur login', () => {
  it('User berhasil membuka menu bar', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('#react-burger-menu-btn').click()
  })
})