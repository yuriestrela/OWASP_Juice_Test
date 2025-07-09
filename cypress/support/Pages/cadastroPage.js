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

    interceptRegister() {
        cy.intercept('POST', '/api/Users/').as('postCadastro').then(() => {
            cy.get(pageObjects.clickRegister).click()
        })
        cy.wait('@postCadastro').then(({ response }) => {
            expect(response.statusCode).to.eq(201)
        })

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

    registeredEmail(error) {
        if (error.includes('unique')) {
            cy.get(pageObjects.emailRegistered)
                .contains(error)
                .should('contain', error)
        }
    }

    emptyField(type) {
        cy.get(pageObjects.fields)
            .contains(`${type}`)
            .click()
        cy.get('body').click()
    }

    ValidateAllFields(emailError, passwordError, repeatPassworError, selectQuestError, answerError) {

        cy.get(pageObjects.matOptions)
            .contains(emailError)
            .should('contain', emailError)

        cy.get(pageObjects.matOptions)
            .contains(passwordError)
            .should('contain', passwordError)

        cy.get(pageObjects.matOptions)
            .contains(repeatPassworError)
            .should('contain', repeatPassworError)

        cy.get(pageObjects.matOptions)
            .contains(selectQuestError)
            .should('contain', selectQuestError)

        cy.get(pageObjects.matOptions)
            .contains(answerError)
            .should('contain', answerError)

        cy.get(pageObjects.clickRegister).should('be.disabled')

    }

    passwordAdvice() {
        cy.get(pageObjects.passwordButton).click()
    }

    menuAdvices() {
        cy.get(pageObjects.menuAdvices).should('be.visible')
    }

    requireStatus(require) {
        if (require.contains('verde')) {
            cy.get(pageObjects.menuAdvices)
                .contains('div', require)
                .find('mat-icon')
                .should('have.attr', 'fonticon', 'done')
                .should('have.css', 'color', 'rgb(84, 110, 122)')

        } else if (require.contains("vermelho")) {
            cy.get(pageObjects.menuAdvices)
                .contains('div', require)
                .find('mat-icon')
                .should('have.attr', 'fonticon', 'error')
                .should('have.css', 'color', 'rgb(255, 87, 34)')          
        }

    }

    progressBar(progress) {
        cy.get(pageObjects.progressBar)
            .should('have.attr', 'aria-valuenow', progress)
    }

    loginLinkClick() {
        cy.get(pageObjects.loginPage).click()
    }

    goToLogin(link) {
        cy.url().should('include', '/login');       
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
    emailRegistered: 'div[ng-if="error"]',
    passwordButton: 'button[class*="mdc-switch"]',
    menuAdvices: 'mat-card-content[class*="mat"]',
    progressBar: 'mat-progress-bar',
    loginPage: 'a.primary-link',
};