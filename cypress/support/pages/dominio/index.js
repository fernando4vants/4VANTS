const faker = require('faker')
const el = require('./elements').ELEMENTS

class Dominio {

    criacaoDeDominio(){
        
        cy.contains('Novo Domínio').click();
        cy.get(el.inputName).type(faker.mersenne.rand());
        //Seleção da opção Locação
        cy.get(el.select).within(() => { 
            cy.contains('Selecione uma opção').click()
        });
        cy.get(el.dropdown).within(() => { 
            cy.contains('Faixa de Servidão').click()
        });
        cy.get(el.inputFaixa).type(faker.finance.mask()); 
        cy.get(elinputFaixaKM).type(faker.finance.creditCardCVV()); 
        cy.get(el.inputInicioDeFaixa).type('ABCregiao');
        cy.get(el.inputFinalDeFaixa).type('defregiao1');
        cy.get(el.inputLatitudeInicial).type(faker.address.latitude());
        cy.get(el.inputLongitudeInicial).type(faker.address.longitude());
        cy.get(el.inputLatitudeFinal).type(faker.address.latitude());
        cy.get(el.inputLongitudeFinal).type(faker.address.longitude());
        cy.get(el.inputObservation).type(faker.lorem.paragraph());
    }
    confirmFaixaServidao(){
        cy.get(el.buttonSubmit).click();
        cy.get(el.inputConfirm).within(() => { 
            cy.contains('Ok').click()
        });
    }
}

export default new Dominio ();