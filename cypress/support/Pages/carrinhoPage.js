export class CarrinhoPage {

    visitHome() {
        cy.registerLoginAndVisitCart()
        cy.fecharModais()
    }

    loginByApi() {
        cy.createUserApi()
        cy.loginByApi()
    }

    addToBasket(product) {
        cy.intercept('POST', '/api/BasketItens/**').as('addToCart')

        cy.get(pageObjects.productCard)
            .contains(product)
            .parents(pageObjects.productCard)
            .within(() => {
                cy.get(pageObjects.addToBasketButton).click()
            })

        cy.wait('@addToCart').then((response) => {
            expect(response.statusCode).to.eq(200)
        })

    }

    viewBasket() {
        cy.get(pageObjects.basket).click()
    }


    ShouldAddToBasket(product) {
        this.viewBasket()
        cy.get(pageObjects.basketItens).should('contain.text', product)
    }

    shouldBeEmpty() {
        cy.get(pageObjects.basketItens)
            .find(pageObjects.basketProduct)
            .should('not.exist')
    }

}

const pageObjects = {
    productCard: 'mat-card[class*="mat-mdc"]',
    addToBasketButton: 'button[aria-label="Add to Basket"]',
    basket: 'button[class*="unthemed mat-mdc-button-base n"]',
    basketItens: 'mat-table[class*="data-table"]',
    basketProduct: 'mat-row[class*="table__row"',
}