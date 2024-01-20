function capitalize (string) {
    if (!string) return null
    if (string.trim().length === 0) return null
    newString = string[0].toUpperCase() + string.slice(1)
    return newString
}

module.exports = capitalize