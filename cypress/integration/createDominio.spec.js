import dominioFS from '../support/pages/dominio/index'

describe('Dominios', () => {
    beforeEach(() => cy.visit("#/login?redirect=%2Fdashboard"));

    it.only('Criação de dominios - Fiaxa de Servidão', () => {
        const email = "fernando@4vants.com.br";
        const senha = "Teste@123";
       //login
        cy.get("#email").type(email);
        cy.get("#password").type(senha);
        cy.get("button[type='submit']").click();
        cy.get('.ant-menu').within(() => { 
            cy.contains('Domínios').click(); 
        })
        dominioFS.criacaoDeDominio()
        dominioFS.confirmFaixaServidao()
       //Ação
       

    });

    

    it('Criação de Faixa de Servidão com Subdominio', () => {
        const email3 = "fernando@4vants.com.br";
        const senha2 = "Teste@123";
        const newNameDominio  = "DOM-001";
        const latitude = "45";
        const longitude = "45";
        const descricao3 = "teste 0001";
        const faixa = "1";
        const extension = "22";
        const latIni = "45";
        const lontIni ="45";
        const latFinal= "45";
        const lontFinal ="45";
        const descricao4 = " TESTE"
        const sub01 = "001";
        const sub02 = "002";

        cy.get("#email").type(email3);
        cy.get("#password").type(senha2);
        cy.get("button[type='submit']").click();

        cy.get('.ant-menu').within(() => { 
            cy.contains('Domínios').click(); 
        })

         //inserir o button Novo Dominio
         //cy.contains('Novo Domínio').click();
         cy.get('input[placeholder="Nome"]').type(newNameDominio);
         //Seleção da opção Faixa de Servidão
         cy.get('input#trackNumber').type(faixa);
         cy.get('input#extensionKm').type(extension);
         cy.get('input#locationInitName').type();
         cy.get('input#locationEndName').type();
         cy.get('input[placeholder="Digite a latitude inicial"]').type(latIni);
         cy.get('input[placeholder="Digite a longitude inicial"]').type(lontIni);
         cy.get('input[placeholder="Digite a latitude final"]').type(latFinal);
         cy.get('input[placeholder="Digite a longitude final"]').type(lontFinal);
         //Criação de Subdominio
         cy.get('.ant-btn').within(() => { 
            cy.contains('Novo Subdomínio').click(); 
        })

        //Sub001
        cy.get('input#subDomainName-0').type(sub01);
        cy.get('input#subDomainLatitudeInicial-0').type(latIni);
        cy.get('input#subDomainLatitudeFinal-0').type(lontIni);  
        cy.get('input#subDomainLongitudeInicial-0').type(latFinal);
        cy.get('input#subDomainLongitudeFinal-0').type(lontFinal);  

        //Sub002
        cy.get('input#subDomainName-1').type(sub02);
        cy.get('input#subDomainLatitudeInicial-1').type(latIni);
        cy.get('input#subDomainLatitudeFinal-1').type(lontIni); 
        cy.get('input#subDomainLongitudeInicial-1').type(latFinal);
        cy.get('input#subDomainLongitudeFinal-1').type(lontFinal);   

         //inserir comando para selecionar arquivo
         cy.get('input#observation').type(descricao);
         cy.get("button[type='submit']").click();
    });
});