let printDigits = (num) => {
    let digit = 0
    let result = 0
    while (num) {
        digit = num % 10
        result = (result*10) + digit
        num = num/10|0

    }
    return result.toString().split('')
}

console.log(printDigits(567))