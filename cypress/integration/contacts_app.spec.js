/*eslint-disable */
describe("LOAD OK", function() {
  it("should load without crashing", function() {
    cy.visit("http://localhost:3000");
  });

  it("should have the right initial state", function() {
    cy.window()
      .its("store")
      .invoke("getState")
      .should("deep.equal", { contacts: [], isModalCreationOpen: false });
  });
});

describe("Modal Open and Close", function() {
  beforeEach(function() {
    cy.window()
      .its("store")
      .invoke("dispatch", { type: "CLOSE_CREATION_MODAL" });
  });
  it("should open the modal", function() {
    cy.get("button.open-modal-btn");
    cy.get("button").click();
    cy.window()
      .its("store")
      .invoke("getState")
      .its("isModalCreationOpen")
      .should("equal", true);
  });
  it("should close the modal", function() {
    cy.get("button.open-modal-btn").click();
    cy.get("button.MuiButton-containedSecondary").click();
    cy.window()
      .its("store")
      .invoke("getState")
      .its("isModalCreationOpen")
      .should("equal", false);
  });
});

describe("Create a contact functionality", function() {
  it("should create a contact", function() {
    cy.get("button.open-modal-btn").click();
    cy.get("input")
      .first()
      .type("Damien");

    cy.get("input")
      .last()
      .type("555-888-999");

    cy.get(".contact-creation-btn").click();

    cy.window()
      .its("store")
      .invoke("getState")
      .its("contacts")
      .should("have.length", 1);

    cy.window()
      .its("store")
      .invoke("getState")
      .its("contacts")
      .should("deep.equal", [
        { id: 0, name: "Damien", phone_number: "555-888-999" }
      ]);

    cy.window()
      .its("store")
      .invoke("getState")
      .its("isModalCreationOpen")
      .should("equal", false);
  });
  it("should create 2 contacts", function() {
    cy.get("button.open-modal-btn").click();
    cy.get("input")
      .first()
      .type("John");

    cy.get("input")
      .last()
      .type("555-777-111");

    cy.get(".contact-creation-btn").click();

    cy.window()
      .its("store")
      .invoke("getState")
      .its("contacts")
      .should("have.length", 2);

    cy.get("button.open-modal-btn").click();
    cy.get("input")
      .first()
      .type("Jennifer");

    cy.get("input")
      .last()
      .type("555-000-333");

    cy.get(".contact-creation-btn").click();

    cy.window()
      .its("store")
      .invoke("getState")
      .its("contacts")
      .should("have.length", 3);

    cy.window()
      .its("store")
      .invoke("getState")
      .its("isModalCreationOpen")
      .should("equal", false);
  });
});

describe("Delete a contact functionality", function() {
  it("should delete a contact", () => {
    cy.get(".delete-contact-btn")
      .eq(1)
      .click();

    cy.window()
      .its("store")
      .invoke("getState")
      .its("contacts")
      .should("have.length", 2);
    cy.window()
      .its("store")
      .invoke("getState")
      .its("contacts")
      .should("deep.equal", [
        {
          id: 0,
          name: "Damien",
          phone_number: "555-888-999"
        },
        {
          id: 2,
          name: "Jennifer",
          phone_number: "555-000-333"
        }
      ]);
  });
});
