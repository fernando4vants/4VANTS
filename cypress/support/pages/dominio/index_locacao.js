const faker = require('faker')
const el = require('./elements_locacao').ELEMENTS

class Locacao{

    criacaoDominioLoc(){
        //const newNameLocacao  = "DOM-59991544";
        //const latitude = "-25.3268457";
        //const longitude = "-49.14773091";

        cy.contains('Novo Domínio').click();
        cy.get(el.inputName).type(faker.mersenne.rand());
        cy.get(el.select).within(() => { 
            cy.contains('Selecione uma opção').click()
        });
        cy.get(el.dropdown).within(() => { 
            cy.contains('Locação').click()
        });
        cy.get(el.inputLatitude).type(faker.address.latitude());
        cy.get(el.inputLongitude).type(faker.address.longitude());
        cy.get(el.inputObservacao).type(faker.lorem.paragraph());
    }

    confirmLoc(){
        cy.get(el.buttonSubmit).click();
    }
}

export default new Locacao();