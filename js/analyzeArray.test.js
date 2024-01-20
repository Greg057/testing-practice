const analyzeArray = require("./analyzeArray")

test("properly analyze array", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toBe({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      })
})