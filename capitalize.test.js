const capitalize = require("./capitalize");

test('normal string', () => {
  expect(capitalize("test")).toBe("Test");
});

test("string with numbers", () => {
  expect(capitalize("test121")).toBe("Test121");
});

test("first character is a  number", () =>{
  expect(capitalize("1test")).toBe("first character is not a letter");
});

test("first character is a special character", () => {
  expect(capitalize("@test")).toBe("first character is not a letter");
});

test("first letter is already upper case", () => {
  expect(capitalize("Test")).toBe("Test");
});
