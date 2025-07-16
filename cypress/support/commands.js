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

Cypress.Commands.add('createUser', (email) => {
    cy.request({
        method: 'POST',
        url: 'https://juice-shop.herokuapp.com/api/Users',
        form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
        body: {
            "email": `${email}`,
            "password": "12345",
            "passwordRepeat": "12345",
            "securityQuestion":
            {
                "id": 7,
                "question": "Name of your favorite pet?",
                "createdAt": "2025-07-02T23:14:25.190Z",
                "updatedAt": "2025-07-02T23:14:25.190Z"
            },
            "securityAnswer": "zyon"
        },
    })
})