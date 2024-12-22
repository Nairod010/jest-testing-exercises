const arrayAnalizer = require("./arrayAnalizer")

test("ordered array", () => {
  expect(arrayAnalizer([1,2,3,4,5,6])).toBe({
    "average": 0,
    "min": 0,
    "max": 0,
    "length": 0
  });
});


test("unordered array", () => {
  expect(arrayAnalizer([4,2,2,1,8,2])).toBe({
    "average": 0,
    "min": 0,
    "max": 0,
    "length": 0
  });
});

test("array with string instead of intigers", () => {
  expect(arrayAnalizer([1,2,"test",4,5,6])).toBe("array has a string in it");
});

test("array that contains null value", () => {
  expect(arrayAnalizer([1,2,3,4,null,6])).toBe("array contains a null value");
});

test("empty array", () => {
  expect(arrayAnalizer([])).toBe("array is empty");
});
