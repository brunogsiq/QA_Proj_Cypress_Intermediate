import { faker } from '@faker-js/faker'

describe('03 - Criar Projeto', () =>
{
    beforeEach(() =>
    {
        cy.login()
    })

    it('03.01 - Novo projeto.', () =>
    {
        const project = {
            name: `project-${faker.datatype.uuid()}`,
            description: faker.random.words(5)
        }

        cy.gui_createProject(project)

        cy.url()
            .should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${project.name}`)
        cy.contains(project.name)
            .should('be.visible')
        cy.contains(project.description)
            .should('be.visible')
    })
})
