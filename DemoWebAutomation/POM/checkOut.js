const CheckOut ={
    CheckOutProcess: () => {

        cy.get("#termsofservice").should('be.visible')
        cy.get("#termsofservice").check().should('be.checked')
        cy.get('#checkout').should('be.visible')
        cy.get('#checkout').click()
        cy.get('[value="Checkout as Guest"]').should('be.visible')
        cy.get('[value="Checkout as Guest"]').click()
        cy.contains('h2', 'Billing address').should('be.visible');
    }
}

export default CheckOut;