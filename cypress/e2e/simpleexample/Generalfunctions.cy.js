describe('Login by calling general Function',()=>{

    beforeEach(() => {
        cy.visit('https://bookcart.azurewebsites.net/login')
cy.login('Nimra_naveed','Test@12345')  // login function declare in commands.js 
      });


it('Login Assertions',()=>{
    const image = cy.get('div.p-1.ng-star-inserted')
    image.its('length').should('equal',45)

})

 

})