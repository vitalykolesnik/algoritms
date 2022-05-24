function cashFunction(fn) {
    const cash = []
    return function (n) {
        if(cash[n]) {
            console.log(`From cash `, cash[n])
            return cash[n]
        }
        let result = fn(n)
        cash[n] = result;
        console.log(`From function `, result)
        return result;
    }
}

function factorial(n) {
    let result = 1
    while (n != 1) {
        result *= n;
        n -= 1
    }
    return result
}

const cashFactorial = cashFunction(factorial) 
cashFactorial(5)
cashFactorial(4)
cashFactorial(3)
cashFactorial(4)
cashFactorial(5)