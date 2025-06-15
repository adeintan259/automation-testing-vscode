class BukaKeranjang{
    //Object Model
     kolomusername = '#user-name';
     kolompassword = '#password'; // ← ini harus ada
     tombollogin = '#login-button';
     addcart = '[data-test="add-to-cart-sauce-labs-backpack"]';
     bukakeranjang = '[data-test="shopping-cart-link"]'

//StepDefination atau aksi
 login(username, password) {
    cy.get(this.kolomusername).type(username);
    cy.get(this.kolompassword).type(password);
    cy.get(this.tombollogin).click();
}
}

export default BukaKeranjang;