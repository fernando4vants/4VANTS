import locacao from '../support/pages/dominio/index_locacao'
const el = require('../support/pages/dominio/elements_locacao').ELEMENTS

describe('Dominios- Locação', () => {
    beforeEach(() => cy.visit("#/login?redirect=%2Fdashboard"));

    it('Criação de Dominio - Locação', () => {

        const email = "fernando@4vants.com.br";
        const senha = "Teste@123";
    //login
        cy.get("#email").type(email);
        cy.get("#password").type(senha);
        cy.get("button[type='submit']").click();
        cy.get('.ant-menu').within(() => { 
            cy.contains('Domínios').click(); 
        })
    //Ação
       locacao.criacaoDominioLoc()
       locacao.confirmLoc()
       cy.get(el.inputConfirm).within(() => { 
    cy.contains('Ok').click()
    });
    });
});