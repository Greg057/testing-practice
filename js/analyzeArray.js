function analyzeArray (arr) {
    if (!Array.isArray(arr)) return "Error"
    if (arr.filter(el => isNaN(el)).length !== 0) return "Error, only numbers allowed"
    const average = arr.reduce((prev, cur) => prev + cur, 0) / arr.length
    const min = arr.sort()[0]
    const max = arr.sort().reverse()[0]
    const length = arr.length
    return {
        average,
        min,
        max,
        length
      }
}

module.exports = analyzeArray