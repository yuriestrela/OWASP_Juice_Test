import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { CadastroPage } from "../../support/Pages/cadastroPage"
import { loginPage } from "../../support/Pages/loginPage";
const Login = new loginPage()
const Cadastro = new CadastroPage()
const faker = require('faker-br')
const validEmail = 'yuri@gmail.com'
const validPassword = 'Cpftz4#Fla'

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

Then('npm install --save-dev cypress @badeball/cypress-cucumber-preprocessor @bahmutov/cypress-esbuild-preprocessor', () => {
    
})