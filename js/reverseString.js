function reverseString (string) {
    if (!string) return null
    if (string.trim().length === 0) return null
    newString = [...string].reverse().join("")
    return newString
}

module.exports = reverseString