const webpage = {
    url: 'http://demowebshop.tricentis.com/', 
  
    ProductSearching: (ProductName) => {
      cy.visit(webpage.url);
      cy.get('#small-searchterms').type(ProductName); 
      cy.get('[value="Search"]').should('be.visible')
      cy.get('[value="Search"]').click()
      cy.get('#Q').invoke('val').should('contain',ProductName)
    }    
};


  
export default webpage;