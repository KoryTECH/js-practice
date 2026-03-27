function oddAndEven() {
    var num = parseInt(prompt(`Enter your number`))
    if (num % 2 === 0 ){
        console.log(`This is an even number`)
    }
    else {
        console.log(`This number is an odd number`)
    }
}
oddAndEven();