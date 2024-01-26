/// <reference types="cypress" />

import loc from "../../support/locators";

describe('01 - Login', () =>
{
    it('01.01 - Validar acesso a url do projeto.', () =>
    {
        cy.visit('baseUrl')
        cy.get(loc.Home.Slogan)
            .should('be.exist')
            .and('be.visible')
            .and('have.text', '\nGitLab Community Edition\n')
            .and('have.css', 'color', 'rgb(46, 46, 46)')
    })

    it('01.02 - Validar login válido.', () =>
    {
        cy.visitar()
        cy.login()
    })

    it('01.03 - Validar login válido - Versão 2.', () => {
        const user = Cypress.env('user_name')
        const password = Cypress.env('user_password')
        const options = { cacheSession: false }
    
        cy.login(user, password, options)
    
        cy.get('.qa-user-avatar').should('be.visible')
    })
})