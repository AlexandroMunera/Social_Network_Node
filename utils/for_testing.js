const palindrome = (string) => {
    if (typeof string === 'undefined') return undefined
    return string
      .split('')
      .reverse()
      .join('')
}

const average = (array) => {

    if (array.length === 0) return 0

    if (typeof array === 'undefined') return

    let sum = 0

    array.forEach((element) => {
        if (typeof element === 'number') {
            sum += element
        }
    })

    return sum / array.length    
}

module.exports = {
    palindrome,
    average
}