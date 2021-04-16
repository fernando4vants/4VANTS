import ativos from '../support/pages/ativos/index'
const faker = require('faker')
const el = require('../support/pages/ativos/elements').ELEMENTS

describe('DominiosAtivos', () => {
    beforeEach(() => cy.visit("#/login?redirect=%2Fdashboard"));

    it('Criação de ativos', () => {
        const email = "fernando@4vants.com.br";
        const senha = "Teste@123";
        
        cy.get("#email").type(email);
        cy.get("#password").type(senha);
        cy.get("button[type='submit']").click();
        //Ação
        ativos.criarAtivo()
        ativos.confirmAtivo()     
        cy.get(el.confirmAtivo).within(() => { 
            cy.contains('Ok').click()
        });
    });

});
    
