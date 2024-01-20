const analyzeArray = require("./analyzeArray")

test("properly analyze array", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      })
    expect(analyzeArray([-11.5,8,3.5,4,2,6])).toEqual({
        average: 2,
        min: -11.5,
        max: 8,
        length: 6
      })
    expect(analyzeArray([1])).toEqual({
        average: 1,
        min: 1,
        max: 1,
        length: 1
      })
    expect(analyzeArray([0, 0, 0])).toEqual({
        average: 0,
        min: 0,
        max: 0,
        length: 3
      })
    expect(analyzeArray("[1]")).toEqual("Error")
    expect(analyzeArray("[]")).toEqual("Error")
    expect(analyzeArray(1,2,3)).toEqual("Error")
    expect(analyzeArray([1,2,3,"a"])).toEqual("Error, only numbers allowed")
})