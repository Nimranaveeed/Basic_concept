describe('Testing View Port', () => {
    ////////////Upload File////////////
    it("Single file Upload", () => {
      cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
      const pathofpic='down.jpg'
cy.get('#filesToUpload').attachFile(pathofpic) 
cy.get('p:nth-child(6) > strong').and('contain.text', 'Files You Selected:');


       })
       it("Multiple files Upload", () => {
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
        const pathofpic1='down.jpg'
          const pathofpic2='example.json'
  cy.get('#filesToUpload').attachFile(pathofpic1) 
  cy.get('#filesToUpload').attachFile(pathofpic2) 
  cy.get('p:nth-child(6) > strong').and('contain.text', 'Files You Selected:');
  
         })
         
         it("Change file name while uploading", () => {
            cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
            const pathofpic1='down.jpg'
            cy.get('#filesToUpload')
            .attachFile({ filePath: pathofpic1 , fileName: 'customFileName.json' });    
   
      cy.get('p:nth-child(6) > strong').and('contain.text', 'Files You Selected:');
      
             })
    })