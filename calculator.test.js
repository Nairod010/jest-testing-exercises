const Calculator  = require("./Calculator")

describe("Calculator", () => {
  const calculator = new Calculator();

  test("1 + 1", () => {
    expect(calculator.add(1,1)).toBe(2)
  })

  test("1 + 1", () => {
    expect(calculator.substract(3,1)).toBe(2)
  })

  test("1 + 1", () => {
    expect(calculator.divide(10,2)).toBe(5)
  })

  
  test("1 + 1", () => {
    expect(calculator.multiply(3,2)).toBe(6)
  })
});


