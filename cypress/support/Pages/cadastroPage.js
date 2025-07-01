export class CadastroPage {

    visit() {
        cy.visit('/#/register')
    }

    fillRegisterForm(email, password, securityQuest, repeatPassword) {
        if (email) {
            cy.get(pageObjects.inputEmail).type(email)
        }
        if (password) {
            cy.get(pageObjects.inputPassword).type(password)
        }
        if (repeatPassword) {
            cy.get(pageObjects.inputConfirmPassword).type(repeatPassword)
        }
        if (securityQuest) {
            cy.get(pageObjects.selectQuest).click()
            cy.get(questionPanel).contains('Your favorite movie?').click()
            
            cy.get(pageObjects.securityAnswer).type(securityQuest)
        }
    }

    clickRegister() {
        cy.get(pageObjects.clickRegister).click()
    }

    shouldRegister(message) {
        cy.url().should('include', '/my-account');
        cy.get(pageObjects.shouldRegister).contains(message).should('be.visible')
    }

    shouldNotRegister(error) {

        if (error.includes('nome')) {
            cy.get(pageObjects.inputName)
                .siblings('.errorLabel')
                .should('contain', error)

        } else if (error.includes('e-mail')) {
            cy.get(pageObjects.inputEmail)
                .siblings('.errorLabel')
                .should('contain', error)

        } else if (error.includes('senha')) {
            cy.get(pageObjects.inputPassword)
                .siblings('.errorLabel')
                .should('contain', error)
        }

        cy.url().should('not.include', '/my-account');


    }

    ValidateAllFields(nameError, emailError, passwordError) {
        cy.get(pageObjects.inputName)
            .siblings('.errorLabel')
            .should('contain', nameError)

        cy.get(pageObjects.inputEmail)
            .siblings('.errorLabel')
            .should('contain', emailError)

        cy.get(pageObjects.inputPassword)
            .siblings('.errorLabel')
            .should('contain', passwordError)
    }


}

const pageObjects = {
    inputEmail: '#emailControl',
    inputPassword: '#passwordControl',
    inputConfirmPassword: '#repeatPasswordControl',
    selectQuest: '#mat-select-value-2',
    questionPanel: '#mat-select-2-panel',
    securityAnswer: '#securityAnswerControl',
    clickRegister: '#registerButton',
    shouldRegister: 'div[class*="swal2-show"]'
};