describe('Fitur login', () => {
  it('User berhasil hapus keranjang', () => {
    cy.visit('https://perempuanlaut.id/')
    cy.get('.elementor-sticky--active > .elementor-element-7710d984 > .elementor-element > .elementor-widget-container > a > .attachment-full').click()
  })
})