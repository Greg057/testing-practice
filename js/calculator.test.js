const calculator = require("./calculator")

test("properly add", () => {
    expect(calculator.add(1,2)).toBe(3)
    expect(calculator.add(0,0)).toBe(0)
    expect(calculator.add(-3,-1)).toBe(-4)
    expect(calculator.add("a",-1)).toBe("not a number")
})

test("properly substract", () => {
    expect(calculator.subtract(1,2)).toBe(-1)
    expect(calculator.subtract(-1,-2)).toBe(1)
    expect(calculator.subtract(0,0)).toBe(0)
    expect(calculator.subtract("a",-1)).toBe("not a number")
})

test("properly multiply", () => {
    expect(calculator.multiply(1,2)).toBe(2)
    expect(calculator.multiply(-5,2)).toBe(-10)
    expect(calculator.multiply(0,2)).toBe(0)
    expect(calculator.multiply("a",-1)).toBe("not a number")
})

test("properly divide", () => {
    expect(calculator.divide(1,2)).toBeCloseTo(0.5)
    expect(calculator.divide(10,-2)).toBeCloseTo(-5)
    expect(calculator.divide(1,0)).toBe("dividing by 0 not possible")
    expect(calculator.divide("a",-1)).toBe("not a number")
})