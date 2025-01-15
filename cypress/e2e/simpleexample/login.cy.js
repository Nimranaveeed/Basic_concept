describe('template spec', () => {
  it('Login API', () => {
    /////////// POST request to login through API////////////////
    cy.request({
      method: 'POST',
      url: 'https://bookcart.azurewebsites.net/api/login', // Update this to the actual API endpoint for login
      body: {
        username: 'Nimra_naveed',
        password: 'Test@12345'
      }
    }).then((response) => {
      // Validate the response if needed
      expect(response.status).to.eq(200); // Ensure the login was successful
      
     
    })
  })



//////////Function through UI login/////////////////
it('Login UI', ()=>{
cy.visit('https://bookcart.azurewebsites.net/login')
cy.get('#mat-input-0').type('Nimra_naveed')
cy.get('#mat-input-1').type('Test@12345')
cy.get('.mat-mdc-card-actions > .mdc-button > .mdc-button__label').click()
cy.wait(1000)
})

})
