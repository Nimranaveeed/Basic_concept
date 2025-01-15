describe("Mouseover", () => {
    it('Click on Products', () => {

  cy.visit('https://www.bstackdemo.com/')
  // cy.contains('Products').realHover()
  cy.get(' #1 ').realHover()
  cy.get('#1 .shelf-item__buy-btn').click()
  cy.get('.buy-btn').click()

    })
  
    
  })