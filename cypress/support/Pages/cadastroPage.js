export class CadastroPage {

    visit() {
        cy.visit('/#/register')
        cy.fecharModais()
    }

    fillRegisterForm(email, password, repeatPassword, securityQuest, selectQuest) {
        if (email) {
            cy.get(pageObjects.inputEmail).type(email)
        }
        if (password) {
            cy.get(pageObjects.inputPassword).type(password)
        }
        if (repeatPassword) {
            cy.get(pageObjects.inputConfirmPassword).type(repeatPassword)
        }
        if (selectQuest) {
            cy.get(pageObjects.selectQuest).click()
            cy.get(pageObjects.questionPanel).contains('Your favorite movie?').click()
        }
        if (securityQuest) {
            cy.get(pageObjects.securityAnswer).type(securityQuest)
        }
    }

    clickRegister() {
        cy.get(pageObjects.clickRegister).click()
    }

    shouldRegister() {
        cy.url().should('include', '/login');
        cy.get(pageObjects.shouldRegister).should('be.visible')
    }

    shouldNotRegister(error) {

        if (error.includes('email')) {
            cy.get(pageObjects.matOptions)
                .contains(error)
                .should('contain', error)
        } else if (error.includes('provide a password')) {
            cy.get(pageObjects.matOptions)
                .contains(error)
                .should('contain', error)

        } else if (error.includes('repeat') || error.includes('Passwords')) {
            cy.get(pageObjects.matOptions)
                .contains(error)
                .should('contain', error)

        } else if (error.includes('select a security')) {
            cy.get(pageObjects.matOptions)
                .contains(error)
                .should('contain', error)
        } else if (error.includes('answer')) {
            cy.get(pageObjects.matOptions)
                .contains(error)
                .should('contain', error)
        }

        cy.get(pageObjects.clickRegister).should('be.disabled')
        cy.url().should('include', '/register');
    }

    emptyField(type) {
        cy.get(pageObjects.fields)
            .contains(`${type}`)
            .click()
        cy.get('body').click()
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
    selectQuest: '#mat-select-0',
    questionPanel: '#mat-option-11',
    securityAnswer: '#securityAnswerControl',
    clickRegister: '#registerButton',
    shouldRegister: 'div[class*="bar-label mdc"]',
    fields: 'div[class*="field--outlined"]',
    matOptions: 'mat-error',
};