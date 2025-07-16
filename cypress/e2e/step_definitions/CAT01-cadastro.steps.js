import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { CadastroPage } from "../../support/Pages/cadastroPage"
const Cadastro = new CadastroPage()
const faker = require('faker-br')
const validEmail = 'yuri@gmail.com'
const validPassword = 'Cpftz4#Fla'

Given('que o usuário está na página de cadastro', () => {
    Cadastro.visit()
})

When('o usuário preenche todos os campos obrigatórios com {string}', (type) => {
    let securityQuest;
    let email;
    let password;
    let repeatPassword;
    let selectQuest = true
    switch (type) {
        case "e-mail, senha e confirmação de senha válidos e pergunta de segurança validos":
            email = faker.internet.email();
            password = faker.internet.password();
            repeatPassword = password;
            securityQuest = faker.lorem.words();
            Cadastro.fillRegisterForm(email, password, repeatPassword, securityQuest, selectQuest)
            Cadastro.saveUser(email, password)
            break;

        case "e-mail, senha e pergunta de segurança válidos porém com um e-mail sem @dominio":
            email = faker.internet.userName()
            password = validPassword;
            repeatPassword = password;
            securityQuest = faker.lorem.words();
            Cadastro.fillRegisterForm(email, password, repeatPassword, securityQuest, selectQuest)
            break;

        case "e-mail, pergunta de segurança válidos porém com uma senha com menos de 5 caracteres":
            email = faker.internet.email();
            password = 'abcd';
            repeatPassword = password
            securityQuest = faker.lorem.words()
            Cadastro.fillRegisterForm(email, password, repeatPassword, securityQuest, selectQuest)
            break;

        case "e-mail, pergunta de segurança válidos porém com uma senha com mais de 40 caracteres":
            email = faker.internet.email();
            password = 'Abc123!@#Def456$%^Ghi789&*(Jkl012)_+Mno34';
            repeatPassword = password
            securityQuest = faker.lorem.words()
            Cadastro.fillRegisterForm(email, password, repeatPassword, securityQuest, selectQuest)
            break;

        case "e-mail, senha e pergunta de segurança válidos porém com uma confirmação de senha diferente":
            email = faker.internet.email();
            password = validPassword;
            repeatPassword = faker.lorem.word();
            securityQuest = faker.lorem.words();
            Cadastro.fillRegisterForm(email, password, repeatPassword, securityQuest, selectQuest)
            break;

        case "senha, repetição de senha e pergunta de segurança válidos porém com um e-mail em branco":
            password = validPassword;
            repeatPassword = password
            securityQuest = faker.lorem.words()
            Cadastro.fillRegisterForm(email, password, repeatPassword, securityQuest, selectQuest)
            break;

        case "e-mail, repetição de senha e pergunta de segurança válidos porém com uma senha em branco":
            email = faker.internet.email();
            repeatPassword = validPassword;
            securityQuest = faker.lorem.words();
            Cadastro.fillRegisterForm(email, password, repeatPassword, securityQuest, selectQuest)
            break;

        case "e-mail, senha e pergunta de segurança válidos porém com uma confirmação de senha em branco":
            email = faker.internet.email();
            password = validPassword;
            securityQuest = faker.lorem.words();
            Cadastro.fillRegisterForm(email, password, repeatPassword, securityQuest, selectQuest)
            break;

        case "e-mail, senha e confirmação de senha e resposta de segurança válidos porém sem uma pergunta de segurança":
            email = faker.internet.email();
            password = validPassword;
            repeatPassword = password;
            securityQuest = faker.lorem.words();
            Cadastro.fillRegisterForm(email, password, repeatPassword, securityQuest, selectQuest = false)
            break;

        case "e-mail, senha e confirmação de senha válidos porém com uma resposta de segurança em branco":
            email = faker.internet.email();
            password = validPassword;
            repeatPassword = password;
            Cadastro.fillRegisterForm(email, password, repeatPassword, securityQuest, selectQuest)
            break;

        case "e-mail, senha e confirmação de senha válidos e pergunta de segurança válidos porém com um e-mail já cadastrado":
            email = validEmail;
            password = validPassword;
            repeatPassword = password;
            securityQuest = faker.lorem.words();
            Cadastro.fillRegisterForm(email, password, repeatPassword, securityQuest, selectQuest)
            break;

        default:
            break;
    }
})

When('o usuário clica no campo {string} e não preenche nada', (type) => {
    Cadastro.emptyField(type)
})

Then('o sistema deve realizar o cadastro e ir para a página de login', () => {
    Cadastro.interceptRegister()
    Cadastro.shouldRegister()
})

Then('o sistema deve exibir a mensagem {string}, o botão de registrar deve estar desabilitado e não realizar o cadastro', (error) => {
    Cadastro.shouldNotRegister(error)
})

When('o usuário tenta realizar o cadastro', () => {
    Cadastro.clickRegister()
})

Then('o sistema deve exibir a mensagem {string} e não realizar o cadastro', (error) => {
    Cadastro.registeredEmail(error)
})

Then('o sistema deve exibir as mensagens de erro {string}, {string}, {string}, {string} e {string}, o botão de registrar deve estar desabilitado e não realizar o cadastro', (emailError, passwordError, repeatPassworError, selectQuestError, answerError) => {
    Cadastro.ValidateAllFields(emailError, passwordError, repeatPassworError, selectQuestError, answerError)
})

Then('não deve realizar o cadastro', () => {
    cy.url().should('not.include', '/my-account');
})

When('o usuário clica no botão "Password Strength"', () => {
    Cadastro.passwordAdvice()
})

When('o botão ir para a direita e exibir o menu de senha aconselhável', () => {
    Cadastro.menuAdvices()
})


When('o usuário preenche o campo de senha com {string}', (password) => {
    Cadastro.fillRegisterForm(null, password)
})

Then('a mensagem {string} deve ficar com o ícone de check {string} ao lado', (require) => {
    Cadastro.requireStatus(require)
})

Then('a barra de progresso deve estar em {string}', (progress) => {
    Cadastro.progressBar(progress)
})

When('o usuário clica no botão "Already a customer?"', () => {
    Cadastro.loginLinkClick()
})

Then('o sistema deve redirecionar para a página de login', () => {
    Cadastro.goToLogin()
})