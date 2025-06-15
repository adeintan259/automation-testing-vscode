describe('Copy Teks Yayasan Perempuan Laut Indonesia', () => {
  it('Harus menemukan dan menyalin teks Yayasan', () => {
    cy.visit('https://perempuanlaut.id/donation/#')

    // Tunggu elemen termuat (jaga-jaga ada animasi/loading)
    cy.contains('Yayasan Perempuan Laut Indonesia')
      .should('be.visible')
      .then(($el) => {
        const text = $el.text()
        cy.log('Isi teks:', text)

        // Simulasi "copy" teks (disimpan ke alias atau variabel)
        cy.wrap(text).as('copiedText')
      })

    // Verifikasi hasil "copy"
    cy.get('@copiedText').then((copiedText) => {
      expect(copiedText).to.equal('Yayasan Perempuan Laut Indonesia')
    })
  })
})