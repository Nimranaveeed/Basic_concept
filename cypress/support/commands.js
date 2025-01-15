
require("cypress-real-events"); // mouseover library for real events

import 'cypress-file-upload';
////////////// Functions For Login///////////

Cypress.Commands.add('login',(username,password)=>{
    cy.get('#mat-input-0').type('Nimra_naveed')
    cy.get('#mat-input-1').type('Test@12345')
    cy.get('.mat-mdc-card-actions > .mdc-button > .mdc-button__label').click()

})


