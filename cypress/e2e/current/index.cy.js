/// <reference types="cypress" />

context("Actions", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:3000");
  });

  // https://on.cypress.io/interacting-with-elements

  it(".type() - type into a DOM element", () => {
    // https://on.cypress.io/type
    cy.get("h1").should("be.visible").should(p => {
      expect(p).to.contain('Hello Koa 2!');
    })


    cy.get("p").should("be.visible");
  });
});
