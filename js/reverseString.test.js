const reverseString = require("./reverseString")

test("properly returns reversed string", () => {
    expect(reverseString("hi")).toBe("ih")
    expect(reverseString("h")).toBe("h")
    expect(reverseString("")).toBeNull()
    expect(reverseString(" ")).toBeNull()
    expect(reverseString("     ")).toBeNull()
    expect(reverseString("1234")).toBe("4321")
})