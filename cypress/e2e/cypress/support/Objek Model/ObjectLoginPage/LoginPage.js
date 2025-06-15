class LoginPage{
    //Object Model
     kolomusername = '#user-name';
  kolompassword = '#password'; // ← ini harus ada
  tombollogin = '#login-button';

//StepDefination atau aksi
 login(username, password) {
    cy.get(this.kolomusername).type(username);
    cy.get(this.kolompassword).type(password);
    cy.get(this.tombollogin).click();

}
}

export default LoginPage;