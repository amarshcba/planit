describe("Test Case 2 - Successful form submission - repeat 5 times", () => {
  Cypress._.times(5, (trial) => {
    it(
      "trial #" +
        (trial + 1) +
        " should submit a valid form and expect response within 15 sec",
      () => {
        cy.visit("http://jupiter.cloud.planittesting.com");
        cy.contains("Contact").click();
        cy.get('input[name="forename"]')
          .type("John")
          .should("have.value", "John");
        cy.get('input[name="email"]')
          .type("john@mail.com")
          .should("have.value", "john@mail.com");
        cy.get('textarea[name="message"]')
          .type("This form is working fine.")
          .should("have.value", "This form is working fine.");
        cy.contains("Submit")
          .click()
          .wait(15000)
          .get("body")
          .should("contain", "Thanks John, we appreciate your feedback.");
      }
    );
  });
});
