const faker = require('faker')
const el = require('./elements').ELEMENTS

class Ativos {

    criarAtivo(){
        const quilometragem = "100";
        const metragem = "110";

        cy.get(el.selectMenu).within(() => { 
            cy.contains('Ativos').click(); 
        })
        cy.contains('Novo Ativo').click();
        cy.get(el.inputNameAtivo).type(faker.mersenne.rand());
        cy.get(el.select).within(() => { 
            cy.contains('Selecione o tipo de ativo').click()
        });

        cy.get(el.dropdown).within(() => { 
            cy.contains('Cruzamentos').click()
        });
        cy.get(el.select).within(() => { 
            cy.contains('Selecione um domínio').click()
        });

        cy.get(el.dropdownItem).within(() => { 
            cy.contains('DOM-001').click()
        });
       cy.get(el.inputLatitude).type(faker.address.latitude());
       cy.get(el.inputLongitude).type(faker.address.longitude());
       cy.get(el.inputQuilometragem).type(quilometragem); 
       cy.get(el.inputMetragem).type(metragem); 
    }

    confirmAtivo(){
        cy.get(el.inputObservacao).type(faker.lorem.paragraph());
        cy.get(el.button).click();
    
    }
}

export default new Ativos();