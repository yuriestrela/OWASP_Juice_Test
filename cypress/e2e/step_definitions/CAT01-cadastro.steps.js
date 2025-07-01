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
    switch (type) {
        case "e-mail, senha e confirmação de senha válidos e pergunta de segurança validos":
            email = faker.internet.email();
            password = validPassword;
            repeatPassword = validPassword
            securityQuest = faker.message();
            Cadastro.fillRegisterForm(email, password, repeatPassword, securityQuest)
            break;

        case "usuário e senha válidos porém com um e-mail sem @dominio":
            name = faker.name.firstName();
            email = name
            password = validPassword
            Cadastro.fillRegisterForm(name, email, password)
            break;

        case "usuário e e-mail válidos porém com uma senha inválida":
            name = faker.name.firstName();
            email = faker.internet.email();
            password = '12345';
            Cadastro.fillRegisterForm(name, email, password)
            break;

        case "e-mail e senha válidos porém com um usuário em branco":
            email = faker.internet.email();
            password = validPassword;
            Cadastro.fillRegisterForm(name, email, password)
            break;

        case "usuário e senha válidos porém com um e-mail em branco":
            name = faker.name.firstName();
            password = validPassword;
            Cadastro.fillRegisterForm(name, email, password)
            break;

        case "usuário e e-mail válidos porém com uma senha em branco":
            name = faker.name.firstName();
            email = faker.internet.email();
            Cadastro.fillRegisterForm(name, email, password)
            break;

        case "usuário, e-mail e senha em branco":
            Cadastro.fillRegisterForm(name, email, password)
            break;

        case "usuário e senha válidos porém com um e-mail já cadastrado":
            name = faker.name.firstName();
            email = validEmail;
            password = validPassword;
            Cadastro.fillRegisterForm(name, email, password)
            break;            

        default:
            break;
    }
    Cadastro.clickRegister()
})

Then('o sistema deve exibir a mensagem {string} e realizar login automaticamente', (message) => {
    Cadastro.shouldRegister(message)
})

Then('o sistema deve exibir a mensagem {string} e não realizar o cadastro', (error) => {
    Cadastro.shouldNotRegister(error)
})

When('o sistema deve exibir as mensagens de erro {string}, {string} e {string}', (nameError, emailError, passwordError) => {
    Cadastro.ValidateAllFields(nameError, emailError, passwordError)
})

Then('não deve realizar o cadastro', () => {
    cy.url().should('not.include', '/my-account');
})