const faker = require('faker')
const el = require('./elements').ELEMENTS


class Cadastro {

    cadastrarNovoUusuario(){
        cy.contains('Novo Usuário').click()
        cy.get(el.inputName).type(faker.name.firstName() + faker.name.lastName())
        cy.get(el.inputEmail2).type(faker.internet.email()) //pode ser inserido uma variavel para a digitação de um e-mail desejado
        cy.get('.ant-select').within(() => { 
            cy.contains('Selecione um ou mais grupos').click()
        })
        cy.contains('Gestor de inspeção').click()//deve ser inserido o grupo desejado
    }

    submeterDadosDoNovoUsuario(){
        cy.get(el.buttonSubmitNewUser).click()
    }
}

export default new Cadastro();