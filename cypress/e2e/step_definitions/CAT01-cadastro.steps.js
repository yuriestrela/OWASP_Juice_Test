import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { CadastroPage } from "../../support/Pages/cadastroPage"
const Cadastro = new CadastroPage()
const faker = require('faker-br')
const validPassword = 'alunoqa@123'

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
            password = validPassword;
            repeatPassword = password;
            securityQuest = faker.lorem.words();
            Cadastro.fillRegisterForm(email, password, repeatPassword, securityQuest, selectQuest)
            break;

        case "usuário, senha e pergunta de segurança válidos porém com um e-mail sem @dominio":
            email = faker.internet.userName()
            password = validPassword;
            repeatPassword = password;
            securityQuest = faker.lorem.words();
            Cadastro.fillRegisterForm(email, password, repeatPassword, securityQuest, selectQuest)
            break;

        case "e-mail, pergunta de segurança válidos porém com uma senha inválida":
            email = faker.internet.email();
            password = 'abcd';
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

        case "senha e pergunta de segurança válidos porém com um e-mail em branco":
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

        // case "e-mail, senha e confirmação de senha válidos e pergunta de segurança validos":
        //     email = faker.internet.email();
        //     password = validPassword;
        //     repeatPassword = password;
        //     securityQuest = faker.lorem.words();
        //     Cadastro.fillRegisterForm(email, password, repeatPassword, securityQuest)
        //     break;

        // case "e-mail, senha e confirmação de senha válidos e pergunta de segurança validos":
        //     email = faker.internet.email();
        //     password = validPassword;
        //     repeatPassword = password;
        //     securityQuest = faker.lorem.words();
        //     Cadastro.fillRegisterForm(email, password, repeatPassword, securityQuest)
        //     break;

        default:
            break;
    }
})

When('o usuário clica no campo {string} e não preenche nada', (type) => {
    Cadastro.emptyField(type)
})

Then('o sistema deve realizar o cadastro e ir para a página de login', () => {
    Cadastro.clickRegister()
    Cadastro.shouldRegister()
})

Then('o sistema deve exibir a mensagem {string}, o botão de registrar deve estar desabilitado e não realizar o cadastro', (error) => {
    Cadastro.shouldNotRegister(error)
})

When('o sistema deve exibir as mensagens de erro {string}, {string} e {string}', (nameError, emailError, passwordError) => {
    Cadastro.ValidateAllFields(nameError, emailError, passwordError)
})

Then('não deve realizar o cadastro', () => {
    cy.url().should('not.include', '/my-account');
})