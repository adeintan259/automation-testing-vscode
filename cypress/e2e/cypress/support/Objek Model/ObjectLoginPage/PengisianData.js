class PengisianData {
    // Selector login
    kolomusername = '#user-name';
    kolompassword = '#password';
    tombollogin = '#login-button';

    // Selector checkout
    firstname = '[data-test="firstName"]';
    lastname = '[data-test="lastName"]';
    postalcode = '[data-test="postalCode"]';
    continueButton = '[data-test="continue"]';

    // Login function
    login(username, password) {
        cy.get(this.kolomusername).type(username);
        cy.get(this.kolompassword).type(password);
        cy.get(this.tombollogin).click();
    }

    // Checkout form fill function
    isiDataCheckout(firstname, lastname, postalcode) {
        cy.get(this.firstname).type(firstname);
        cy.get(this.lastname).type(lastname);
        cy.get(this.postalcode).type(postalcode);
        cy.get(this.continueButton).click();
    }
}

export default PengisianData;