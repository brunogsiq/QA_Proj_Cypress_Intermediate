// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import loc from './locators'

import 'cypress-wait-until';

    Cypress.Commands.add('cyref', ('/// <reference types="cypress"/>'));

    Cypress.Commands.add('visitar', () =>
    {
        cy.visit('baseUrl')
        cy.get(loc.Home.Slogan)
            .and('be.visible')
    });

    Cypress.Commands.add('login', (
        user = Cypress.env('user_name'),
        password = Cypress.env('user_password'),
      ) =>
      {
        const login = () =>
        {
          cy.visit('/users/sign_in')
      
          cy.get(loc.Login.user)
            .type(user)
          cy.get(loc.Login.pass)
            .type(password, { log: false })
          cy.get(loc.Login.btnSignIn)
            .click()
        }
        login()
      })

    Cypress.Commands.add('login_v2',
    (
        user = Cypress.env('user_name'),
        password = Cypress.env('user_password'),
        { cacheSession = true } = {},
    ) =>
    {
        const login = () =>
        {
          cy.visit('/users/30sign_in')
          cy.get(loc.Login.user)
            .type(user)
          cy.get(loc.Login.pass)
            .type(password, { log: false })
          cy.get(loc.Login.btnSignIn)
            .click()
        }
        const options =
        {
            //mantém cache em outros testes
            cacheAcrossSpecs: true,
        }
        if (cacheSession)
        {
            cy.session(user, login, options)
        }
        else
        {
            login()
        }
    })

    Cypress.Commands.add('logout', () =>
    {
        cy.get(loc.Logout.avatar).click()
        cy.contains('Sign out').click()
    })

    Cypress.Commands.add('gui_createProject', project =>
    {
        cy.visit('/projects/new')

        cy.get('#project_name')
            .type(project.name)
        cy.get('#project_description')
            .type(project.description)
        cy.get(loc.newProj.readme)
            .check()
        cy.contains('Create project')
            .click()
      })


      Cypress.Commands.add('gui_createIssue', issue => {
        cy.visit(`/${Cypress.env('user_name')}/${issue.project.name}/issues/new`)
        cy.get('.qa-issuable-form-title')
            .type(issue.title)
        cy.get('.qa-issuable-form-description')
            .type(issue.description)
        cy.contains('Submit issue')
            .click()
      })