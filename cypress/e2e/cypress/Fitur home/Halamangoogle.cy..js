describe('Google Search Test', () => {
  it('Should load Google homepage', () => {
    cy.visit('https://www.google.com');
    cy.get('input[name="q"]').type('Cypress Testing{enter}');
    cy.contains('Cypress.io').should('exist');
  });
});