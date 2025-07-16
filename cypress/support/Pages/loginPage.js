export class LoginPage {

    visit() {
        cy.visit('/#/login')
        cy.fecharModais()
    
}

fillLoginForm(email, password) {
    if (email) {
        cy.get(pageObjects.inputEmail).type(email)

    }
    if (password) {
        cy.get(pageObjects.inputPassword).type(password)
    }
}

getUser() {
    return cy.readFile('cypress/fixtures/user.json')
}



emptyField(type) {
    cy.get(pageObjects.fields)
        .contains(`${type}`)
        .click()
    cy.get('body').click()
}

clickLogin() {
    cy.get(pageObjects.clickLogin).click();
}

clickEnterToLogin() {
    cy.get(pageObjects.clickLogin).type('{enter}');

}

interceptLogin() {
    cy.intercept('POST', 'rest/user/login').as('postLogin').then(() => {
        this.clickLogin()
    })
    cy.wait('@postLogin').then(({ response }) => {
        expect(response.statusCode).to.eq(200)
    })
}

interceptEnterLogin() {
    cy.intercept('POST', 'rest/user/login').as('postEnterLogin').then(() => {
        this.clickEnterToLogin()
    })
    cy.wait('@postEnterLogin').then(({ response }) => {
        expect(response.statusCode).to.eq(200)
    })
}

interceptUnauthorizedLogin() {
    cy.intercept('POST', '/rest/user/login').as('postUnauthorized').then(() => {
        this.clickLogin()
    })

    cy.wait('@postUnauthorized').then(({ response }) => {
        expect(response.statusCode).to.eq(401)
    })
}

shouldLogin() {
    cy.url().should('include', '/#/search');
}

loginButtonDisabled() {
    cy.get(pageObjects.clickLogin).should('be.disabled')
}

shouldNotLogin() {
    cy.get(pageObjects.shouldLogin).should('not.exist');
}

errorMessage(errorText) {
    if (errorText.includes('Invalid email or password.')) {
        cy.get(pageObjects.errorInvalidCredentials).should('have.text', errorText);
    } else if (errorText.includes('Please provide an email address.')) {
        cy.get(pageObjects.errorRequired).contains(errorText).should('have.text', errorText);
    } else if (errorText.includes('Please provide a password.')) {
        cy.get(pageObjects.errorRequired).contains(errorText).should('have.text', errorText);
    }
}

errorMessages(emailError, passwordError) {
    if (emailError.includes('Please provide an email address.')) {
        cy.get(pageObjects.errorRequired).contains(emailError).should('have.text', emailError);
    }
    if (passwordError.includes('Please provide a password.')) {
        cy.get(pageObjects.errorRequired).contains(passwordError).should('have.text', passwordError);
    }
}


goBack() {
    cy.go('back');
    cy.go('back');
}

shouldNotHome() {
    cy.url().should('not.include', '/#/search');
}

linkClick(message) {
    cy.contains(message).click({ force: true })
}


goToRecoveryPassword() {
    cy.url().should('include', '/#/forgot-password')
}

goToRegister() {
    cy.url().should('include', '/#/register')
}

showPassword() {
    cy.get(pageObjects.showPasswordButton).click()
}

assertPasswordToggle(action) {
    if (action.includes('exibir')) {
        cy.get(pageObjects.inputPassword).should('have.attr', 'type', 'text')
    }

    if (action.includes('ocultar')) {
        cy.get(pageObjects.inputPassword).should('have.attr', 'type', 'password')

    }
}

rememberMe() {
    cy.get(pageObjects.rememberMe).click()
}

assertRememberMeCheck(action) {
    if (action === 'marcado') {
        cy.get(pageObjects.rememberMe).should('be.checked')
    } else if (action === 'desmarcado') {
        cy.get(pageObjects.rememberMe).should('not.be.checked')
    }
}

clickLogout() {
    cy.get(pageObjects.acountMenu).click
    cy.get(pageObjects.logoutButton).click()
}

shoulLogout() {
    cy.url().should('not.include', '/#/search')
    cy.url().should('include', '/#/login')
}

goBack() {
    cy.go('back');
    cy.go('back');
}

}

const pageObjects = {
    inputEmail: '#email',
    inputPassword: '#password',
    clickLogin: '#loginButton',
    errorInvalidCredentials: 'div[class="error ng-star-inserted"]',
    errorRequired: 'mat-error[id*="mat-mdc-error"]',
    showPasswordButton: 'button[class*="icon-button mat-unthemed mat-mdc-button-base "]',
    rememberMe: '#rememberMe-input',
    loginButtonGoogle: '#loginButtonGoogle',
    acountMenu: '#navbarAccount',
    logoutButton: '#navbarLogoutButton'
}