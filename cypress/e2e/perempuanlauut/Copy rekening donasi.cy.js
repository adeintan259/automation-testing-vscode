describe('Fitur login', () => {
  it('Masuk ke halaman Comunity', () => {
    cy.visit('https://perempuanlaut.id/')
    cy.get('.elementor-sticky--active > .elementor-element-7e81fd2 > .elementor-element-9a0982c > .elementor-element-0c17eb1 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button > .elementor-button-content-wrapper > .elementor-button-text').click()
    cy.get('#copyImage').click()
  })
})