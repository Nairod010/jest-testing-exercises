const reverseString = require("./reverseString")

test("check string with letter", () => {
  expect(reverseString("abcde")).toBe("edcba");
});

test("check for strings with multiple type of characters", () => {
  expect(reverseString("a2@")).toBe("@2a");
});

test("check for string with spaces", () => {
  expect(reverseString("test test")).toBe("tset tset");
});


