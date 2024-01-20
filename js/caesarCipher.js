function caesarCipher (string,key) {
    if (checkInputs(string, key) !== false) return checkInputs(string, key)

    string = string.toUpperCase()
    newString = [...string].map(char => changeChar(char, key)).join("")
    return newString
    
}

function changeChar(char, key) {
    if (char.charCodeAt() > 90 || char.charCodeAt() < 65) {
        return char
    } else {
        let charCode = checkCode(char.charCodeAt() + key)
        return String.fromCharCode(charCode)
    }
    
}

function checkCode(charCode) {
    if (charCode > 90) charCode -= 26
    return charCode
}

function checkInputs(string, key) {
    if (!string) return "Error"
    if (typeof string !== 'string') return 'Error, not a string';
    if (string.trim().length === 0) return "Error, string empty"
    if (!key) return "Error"
    if (isNaN(key)) return "Error, not a key"
    return false
}

module.exports = caesarCipher