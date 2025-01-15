describe(' Assertions ',()=>{

//  Assertion to check the text in the url link 
it (' Get elements', ()=>{
cy.visit('https://bookcart.azurewebsites.net')
cy.contains('Login').click()
cy.url().should('include','/login')
 
//Chaining assertions by using 'AND' 
cy.get('div.brand-title').should('be.visible').and('contain', 'Book') //'div.brand-title' call the css calss with the help of '.' and  check the 'Text' in the div which is 'Book'


//Login Functionality 
cy.get('#mat-input-0').type('Nimra_naveed')
cy.get('#mat-input-1').type('Test@12345')
cy.get('.mat-mdc-card-actions > .mdc-button > .mdc-button__label').click()
cy.wait(1000)


//Assertion to check the length 
 const image = cy.get('div.p-1.ng-star-inserted')

 image.its('length').should('equal',45)

 //Chai-Jquery 
 //Assertion for find() by name and link
 const findnameofbook = cy.get("div.card-title.my-2")
 findnameofbook.contains('Roomies').should('exist') //call by name
 cy.get('div.card-title.my-2').find("a[href*='18']") //call by link


 ///////////Should Callback function///////////////// 

cy.get('span.mdc-button__label').should(($span) =>{

    expect($span).to.have.length(49) 

    const textContent = $span[1].textContent.trim();
    expect(textContent).to.equal('Nimra_naveed');

})



 /////////////WithIn Test/////////////
cy.get('.ng-untouched.ng-pristine.ng-valid').first().within(() => {
    cy.get('.mat-mdc-autocomplete-trigger').type('Nimra');
  });

    })




})