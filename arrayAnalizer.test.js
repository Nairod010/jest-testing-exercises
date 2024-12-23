const arrayAnalizer = require("./arrayAnalizer")

test("ordered array", () => {
  expect(arrayAnalizer([1,2,3,4,5])).toStrictEqual({
    average : 3,
    min : 1,
    max : 5,
    length : 5
  });
});


test("unordered array", () => {
  expect(arrayAnalizer([2,2,1,8,2])).toStrictEqual({
    average : 3,
    min : 1,
    max : 8,
    length : 5
  });
});
