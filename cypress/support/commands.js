const faker = require('faker-br')

Cypress.Commands.add('fecharModais', () => {
  // Fecha modal se existir
  cy.get('button[class*="close-dialog"]', { timeout: 5000 })
    .then(($btn) => {
      if ($btn.length > 0 && $btn.is(':visible')) {
        cy.wrap($btn).click({ force: true })
      }
    })

  // Fecha aviso de cookies se existir
  cy.get('a[class*="cc-btn"]', { timeout: 5000 })
    .then(($btn) => {
      if ($btn.length > 0 && $btn.is(':visible')) {
        cy.wrap($btn).click({ force: true })
      }
    })
})


Cypress.Commands.add('saveUserToFixture', (user) => {
  cy.writeFile('cypress/fixtures/user.json', user)
})

Cypress.Commands.add('getUserFromFixture', () => {
  return cy.readFile('cypress/fixtures/user.json')
})

Cypress.Commands.add('createUserApi', () => {
  const email = faker.internet.email()
  const password = faker.internet.password()
  cy.request({
    method: 'POST',
    url: 'https://juice-shop.herokuapp.com/api/Users',
    failOnStatusCode: false,
    body: {
      email,
      password,
      "passwordRepeat": password,
      "securityQuestion":
      {
        "id": 7,
        "question": "Name of your favorite pet?",
        "createdAt": new Date().toISOString(),
        "updatedAt": new Date().toISOString()
      },
      "securityAnswer": "Teste"
    },
  }).then((response) => {
    expect(response.status).to.eq(201)
    cy.saveUserToFixture({ email, password })
  })
})

Cypress.Commands.add('loginByApi', () => {
  cy.readFile('cypress/fixtures/user.json').then((user) => {
    cy.request({
      method: 'POST',
      url: 'https://juice-shop.herokuapp.com/rest/user/login',
      failOnStatusCode: false,
      body: {
        email: user.email,
        password: user.password,
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
    })
  })
})

Cypress.Commands.add('registerLoginAndVisitCart', () => {
  const email = faker.internet.email()
  const password = faker.internet.password()

  cy.request({
    method: 'POST',
    url: 'https://juice-shop.herokuapp.com/api/Users',
    body: {
      email,
      password,
      passwordRepeat: password,
      securityQuestion: {
        id: 7,
        question: "Name of your favorite pet?",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      securityAnswer: "Teste"
    }
  }).then(() => {
    cy.request({
      method: 'POST',
      url: 'https://juice-shop.herokuapp.com/rest/user/login',
      body: {
        email,
        password
      }
    }).then((res) => {
      const token = res.body.authentication.token

      cy.visit('/#/search', {
        onBeforeLoad(win) {
          win.localStorage.setItem('token', token)
        }
      })
    })
  })
})
