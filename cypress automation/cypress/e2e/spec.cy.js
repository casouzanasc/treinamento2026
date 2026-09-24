describe('Meu primeiro teste', () => {
   it('1 - Acessando home da página Automation Exercise', () => {
    cy.visit('https://www.automationexercise.com/');
    cy.contains('Automation');
    cy.get('h1'); // acessando tag 
    cy.get('h1').contains('Automation'); 

    cy.get('.features_items');// verificar se a seção 'features items' existe na página inicial a partir da classe
    //or
    cy.get('div.features_items');//tag + classe

    });
});