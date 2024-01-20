const capitalize = require("./capitalize")

test("properly capizalize string", () => {
    expect(capitalize("hi")).toBe("Hi")
    expect(capitalize("John")).toBe("John")
    expect(capitalize("J")).toBe("J")
    expect(capitalize("q")).toBe("Q")
    expect(capitalize("")).toBeNull()
    expect(capitalize(" ")).toBeNull()
    expect(capitalize("     ")).toBeNull()
    expect(capitalize("1234")).toBe("1234")
    expect(capitalize()).toBeNull()
})