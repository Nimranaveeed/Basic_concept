
describe('Testing View Port', () => {
////////////Static Dropdown////////////
it("Validate the dropdown option selection by it's value", () => {
  cy.visit("https://www.bstackdemo.com/")
  cy.get("select").select("lowestprice") .invoke("val").should("eq", "lowestprice")
  })
//////////////Select dropdown Dynamic////////////
  it ('Google Search ',()=>{

cy.visit('https://www.google.com/')

cy.get("[name='q']").type('cypress')
  
cy.get('#Alh6id .G43f7e').find('li span').contains('cypress oil').click()
  })
})