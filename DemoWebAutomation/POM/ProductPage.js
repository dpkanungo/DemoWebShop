const ProductPage ={
    AddToCartButton: () => {

        // Check if the product is in stock
        cy.get('.stock').then(($stock) => {
            const stockText = $stock.text();

            if (stockText.includes('In stock')) {
                // If the product is in stock
                cy.get('.add-to-cart').should('be.visible');
                cy.get('.add-to-cart').click();
            } else {
                // If the product is not in stock
                cy.get('.add-to-cart').should('not.be.visible');
            }
        });
    }
}

export default ProductPage;