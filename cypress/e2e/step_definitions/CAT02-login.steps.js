import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../../support/Pages/loginPage"
const Login = new LoginPage()
// const faker = require('faker-br')
// const validEmail = 'yuri@gmail.com'
// const validPassword = 'Cpftz4#Fla'

Given('que o usuário está na página de login', () => {
    Login.visit()
})

When('o usuário preenche os campos obrigatórios com {string}', (email, password) => {
    switch (email, password) {
        case 'e-mail e senha válidos':
            
            break;
    
        default:
            break;
    }
})

Then('o sistema deve realizar o login e ir para a página inicial', () => {
    Login.shouldLogin()
})