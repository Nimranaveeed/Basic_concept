describe("Back and Forward Simulation", () => {
    it('Back and Forward Simulation Test', () => {
      cy.visit('https://bookcart.azurewebsites.net');
  
      // Click the Login button and navigate back and forward
      cy.contains('Login').click({ timeout: 20000 });
      cy.go('back');
      cy.go('forward');
  
    
    });
  
    after(() => {
      // Cleanup or simulate reload after the test
      cy.visit('https://bookcart.azurewebsites.net');
      cy.contains('Login').click();
      cy.reload(); // Reload the page
    });
  });