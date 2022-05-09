describe("Test Case 1 - Form filling and error removal", () => {
  it("should display errors if submit is clicked without filling mandatory fields", () => {
    cy.visit("http://jupiter.cloud.planittesting.com");
    cy.contains("Contact").click();
    cy.contains("Submit").click();
    cy.get("body")
      .should(
        "contain",
        "We welcome your feedback - but we won't get it unless you complete the form correctly."
      )
      .should("contain", "Forename is required")
      .should("contain", "Email is required")
      .should("contain", "Message is required");
  });

  it("should not display errors anymore after the mandatory fields are filled in", () => {
    cy.get('input[name="forename"]').type("John").should("have.value", "John");
    cy.get('input[name="email"]')
      .type("john@mail.com")
      .should("have.value", "john@mail.com");
    cy.get('textarea[name="message"]')
      .type("This form is working fine.")
      .should("have.value", "This form is working fine.");
    cy.get("body")
      .should(
        "not.contain",
        "We welcome your feedback - but we won't get it unless you complete the form correctly."
      )
      .should("not.contain", "Forename is required")
      .should("not.contain", "Email is required")
      .should("not.contain", "Message is required");
  });
});
