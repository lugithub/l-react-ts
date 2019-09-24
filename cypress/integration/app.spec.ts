describe("App", function() {
  it("successfully loads", function() {
    cy.visit("/"); // change URL to match your dev URL
  });

  it("should contain Hello 1", () => {
    cy.visit("/");
    cy.get("h1").contains("Hello 1");
  });

  it("should get name", () => {
    const name = foo({ name: "bar" });
    expect(name).eq("bar");
  });
});

interface User {
  name: string;
}

function foo(user: User) {
  return user.name;
}
