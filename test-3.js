describe("Test Case 3 - Successful buying", () => {
  it("it should allow user to buy multiple items", () => {
    cy.visit("http://jupiter.cloud.planittesting.com");
    cy.contains("Shop").click();
    buyItems("Stuffed Frog", 2);
    buyItems("Fluffy Bunny", 5);
    buyItems("Valentine Bear", 3);
  });

  it("it should allow user to preview their shopping cart", () => {
    cy.contains("Cart").click();
    verifyItems("Stuffed Frog", "$10.99", "$21.98");
    verifyItems("Fluffy Bunny", "$9.99", "$49.95");
    verifyItems("Valentine Bear", "$14.99", "$44.97");
    cy.get(`body`).contains("Total: 116.9");
  });
});

const buyItems = (itemName, itemCount) => {
  Cypress._.times(itemCount, () => {
    cy.get(`h4:contains(${itemName})`).parents("li").contains("Buy").click();
  });
};

const verifyItems = (itemName, unitPrice, subtotal) => {
  cy.get(`td:contains(${itemName})`).parents("tr").contains(unitPrice);
  cy.get(`td:contains(${itemName})`).parents("tr").contains(subtotal);
};
