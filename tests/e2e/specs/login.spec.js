// https://docs.cypress.io/api/introduction/api.html

describe('The Login Page', () => {
  it('navigate to dashboard when logging in via form submission', () => {
    cy.visit('/login')
    cy.contains('h1', 'Tour of Heroes')

    // enter username and password
    cy.get('#username').type('admin')
    // {enter} causes the form to submit
    cy.get('#password').type(`admin{enter}`)

    // we should be redirected to /dashboard
    cy.url().should('include', '/dashboard')
  })
})
