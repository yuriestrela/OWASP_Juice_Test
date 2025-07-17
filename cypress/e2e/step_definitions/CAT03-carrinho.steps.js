import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { CarrinhoPage } from "../../support/Pages/carrinhoPage"
const Carrinho = new CarrinhoPage()

Given('que o usuário está na página de um produto', () => {
    Carrinho.visitHome()
})

When('o usuário clica no botão "Add to Basket" o produto {string}', (product) => {
    Carrinho.addToBasket(product)
})

When('o usuário navega para a página do carrinho', () => {
    Carrinho.viewBasket()
})

Then('o sistema deve realizar o envio do produto {string} para o carrinho', (product) => {
    Carrinho.ShouldAddToBasket(product)
    // Quero validar se o status code está correto e se o nome no body corresponde com "product"
})