import webpage from "../../POM/webpage";
import ProductPage from "../../POM/ProductPage";
import CheckOut from "../../POM/checkOut";

describe('Demo Web shop',() => {

    it('TC001', () => {    //Product searching   
       webpage.ProductSearching('Fiction')
       cy.get('[href="/fiction"]').eq(1).click()
    })
    it('TC002', () => {
        cy.visit(webpage.url) //product browsing
        cy.get('[href="/books"]').eq(2).click()
        cy.get('.page-title').contains('Books')
        cy.get('[href="/computing-and-internet"]').eq(1).click()
        cy.get('.stock').contains('In stock')
    })
    it('TC006', () => {  //search and add the product to the cart
        webpage.ProductSearching('Fiction')
        cy.get('[href="/fiction"]').eq(1).click()
        ProductPage.AddToCartButton();
        cy.get('[href="/cart"]').eq(1).click()
        cy.get('.product-name').contains('Fiction')
    })
    it('TC007',() => { //add to the cart and checkout process
        webpage.ProductSearching('Fiction')
        cy.get('[href="/fiction"]').eq(1).click()
        ProductPage.AddToCartButton();
        cy.get('[href="/cart"]').eq(0).click()
        cy.get('.product-name').contains('Fiction')
        CheckOut.CheckOutProcess()
    })

    
})