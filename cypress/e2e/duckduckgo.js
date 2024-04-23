const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

let page = "vzio";

Given("Eu acesso a pagina inicial do site", function () {
 page = "https://duckduckgo.com/"; 
  });

When("Eu uso a url {string}", (url) => {
  cy.visit(url);
});

Then("Eu deveria ver a msg {string}", (msg) => {
  cy.get("input[type=text]")
    .should("have.attr", "placeholder")
    .and(
      "contain",
      msg
    );

  assert.deepEqual({}, {});
});