export class CarrinhoPage {

    visitHome() {
        cy.visit('/#/search')
        // cy.fecharModais()

    }

    addToBasket(product) {
        cy.get(pageObjects.productCard)
            .contains(product)
            .parents(pageObjects.productCard)
            .within(() => {
                cy.get(pageObjects.addToBasketButton).click()
            })
    }



    viewBasket() {
        cy.get(pageObjects.basket).click()
    }


    interceptAddToBasket() {

    }

    ShouldAddToBasket(product) {
        this.viewBasket()
        cy.get(pageObjects.basketItems).should('contain.text', product)
    }
}

const pageObjects = {
    productCard: 'mat-card[class*="mat-mdc"]',
    addToBasketButton: 'button[aria-label="Add to Basket"]',
    basket: 'button[class*="unthemed mat-mdc-button-base n"]',
    basketItems: ''
}