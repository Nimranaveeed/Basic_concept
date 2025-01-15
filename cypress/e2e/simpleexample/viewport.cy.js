describe('Testing View Port', () => {
  
    before(() => {
      console.log('Running Book Cart Store');
    });
    
    beforeEach(() => {
      cy.visit('https://bookcart.azurewebsites.net/'); 
    });
  
    // Write viewport test for MacBook 13
    it('opens in macbook-13', () => {
      cy.viewport('macbook-13'); // Correct device name
      cy.screenshot();
      cy.wait(200);
    });
  
    // Write viewport test for iPhone X
    it('opens in iphone-x', () => {
      cy.viewport('iphone-x');
      cy.screenshot();
      cy.wait(200);
    });
  
    // Write viewport test for Samsung S10
    it('opens in samsung-s10', () => {
      cy.viewport('samsung-s10');
      cy.screenshot();
      cy.wait(200);
    });
  
  });