const faker = require('faker')


import cadastro from '../support/pages/usuario'

describe("Create User", () => {
    beforeEach(() => cy.visit("#/login?redirect=%2Fdashboard"));

    it("Login na plataforma",  () => {
      
    //User Master 4VANTS
       const email = "fernando@4vants.com.br";
       const senha = "Teste@123";
        
    //Efetuar login
       cy.get("#email").type(email);
       cy.get("#password").type(senha);
       cy.get("button[type='submit']").click();
       cy.get('.ant-menu').within(() => { 
       cy.contains('Usuários').click(); 
    })
       //Ação
       cadastro.cadastrarNovoUusuario()
       cadastro.submeterDadosDoNovoUsuario()
        
    });
});