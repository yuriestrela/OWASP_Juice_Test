import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../../support/Pages/loginPage"
const Login = new LoginPage()
const faker = require('faker-br')
const validEmail = 'yuri@gmail.com'
const validPassword = 'Cpftz4#Fla'

Given('que o usuário está na página de login', () => {
    Login.visit()
})

When('o usuário preenche os campos obrigatórios com {string}', (type) => {
    let email;
    let password;
    switch (type) {
        case "e-mail e senha válidos":
            email = validEmail;
            password = validPassword;
            Login.fillLoginForm(email, password);
            break;

        case "Email e senha porém com um e-mail inválido":
            email = faker.name.firstName();
            password = validPassword;
            Login.fillLoginForm(email, password);
            break;

        case "Email e senha porém com uma senha inválida":
            email = validEmail;
            password = faker.internet.password();
            Login.fillLoginForm(email, password);
            break;

        case "Senha porém com um e-mail em branco":
            password = validPassword;
            Login.fillLoginForm(email, password);
            break;

        case "Email porém com uma senha em branco":
            email = validEmail;
            Login.fillLoginForm(email, password);
            break;

        case "Email e senha em branco":
            Login.fillLoginForm(email, password);
            break;

        case "Email e senha porém com um e-mail não cadastrado":
            email = faker.internet.email();
            password = validPassword;
            Login.fillLoginForm(email, password);
            break;

        case "Email e senha porém com uma senha incorreta":
            email = validEmail;
            password = faker.internet.password();
            Login.fillLoginForm(email, password);
            break;
    }

})


Then('o sistema deve realizar o login e ir para a página inicial', () => {
    Login.interceptLogin()
    Login.shouldLogin()
})

Then('o sistema deve exibir a mensagem {string} e não realizar o login', (error) => {
    Login.interceptUnauthorizedLogin()
    Login.shouldNotLogin()
    Login.errorMessage(error)
})

Then('o sistema deve exibir a mensagem {string}, o botão de login deve estar desabilitado e não deve realizar o login', (error) => {
    Login.loginButtonDisabled()
    Login.shouldNotLogin()
    Login.errorMessage(error)
})

Then('o sistema deve exibir as mensagens {string} e {string}, o botão de login deve estar desabilitado e não deve realizar o login', (emailError, passwordError) => {
    Login.loginButtonDisabled()
    Login.shouldNotLogin()
    Login.errorMessages(emailError, passwordError)
})

Then('o usuário clica no botão "Entrar" e o sistema deve realizar o login e ir para a página inicial', () => {
    Login.interceptEnterLogin()
    Login.shouldLogin()
})

When('o usuário clica no link {string}', (message) => {
    Login.linkClick(message)
})

Then('o sistema deve redirecionar o usuário para a página de recuperação de senha', () => {
    Login.goToRecoveryPassword()
})

Then('o sistema deve redirecionar o usuário para a página de cadastro', () => {
    Login.goToRegister()
})

When('o usuário clica no botão "Show password"', () => {
    Login.showPassword()
})

Then('o sistema deve {string} a senha digitada no campo de senha', (action) => {
    Login.assertPasswordToggle(action)
})

When('o usuário clica no checkbox "Remember me"', () => {
    Login.rememberMe()
})

Then('ele deve ficar {string}', (action) => {
    Login.assertRememberMeCheck(action)
})

When('o usuário realiza o logout clicando no botão "Logout"', () => {
    Login.clickLogout()
})

Then('o sistema deve realizar o logout e redirecionar o usuário para a página de login', () => {
    Login.shoulLogout()
})

When('o usuário clica no botão "Voltar" no navegador', () => {
    Login.goBack()
})

Then('o sistema não deve permitir o acesso à página inicial e deve redirecionar o usuário para a página de login', () => {
    Login.shouldNotLogin()
})