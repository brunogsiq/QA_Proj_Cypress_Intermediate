describe('02 - Logout', () =>
{
    beforeEach(() =>
    {
      cy.login()
    })
  
    it('02.01 - Validar Logout.', () =>
    {
        cy.logout()
        cy.url()
            .should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`)
    })
  })
  