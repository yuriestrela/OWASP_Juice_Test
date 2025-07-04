Cypress.Commands.add('fecharModais', () => {
    cy.get('button[class*="close-dialog"]', { timeout: 2000 })
        .click({ force: true })

    cy.get('a[class*="cc-btn"]', { timeout: 1000 })
        .click({ force: true })
});

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