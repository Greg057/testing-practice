const caesarCipher = require("./caesarCipher")


test("properly cipher", () => {
    expect(caesarCipher("hello",1)).toBe("IFMMP")
    expect(caesarCipher("zybx",3)).toBe("CBEA")
    expect(caesarCipher("   ",3)).toBe("Error, string empty")
    expect(caesarCipher("zybx","a")).toBe("Error, not a key")
    expect(caesarCipher(68,4)).toBe("Error, not a string")
})

