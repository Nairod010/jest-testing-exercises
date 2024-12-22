const cypher = require("./cypher")

test("cypher with 3", () => {
  expect(cypher("abc",3)).toBe("def");
});

test("upper lower", () => {
  expect(cypher("HeLLo",3)).toBe("KhOOr");
});

test("punctuation check", () => {
  expect(cypher("Hello, World",3)).toBe("Khoor, Zruog");
})
