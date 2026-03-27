function calculator() {
    firstNumber = parseInt(prompt(`Enter the first number`));
    symbol = prompt(`Enter symbol i.e +,-,/,*,`);
    secondNumber = parseInt(prompt(`Enter the second number`));
    if (symbol === `+`){
        summation = firstNumber + secondNumber;
        return summation;
    }
    else if ( symbol ===`-`){
        subtracted = firstNumber - secondNumber;
        return subtracted;
    }
    else if ( symbol === `/`){
        divided = firstNumber/secondNumber;
        return divided;
    }
    else if( symbol === `*`) {
        multiplied = firstNumber * secondNumber;
        return multiplied;
    }
    else{
        return Nan;
    }
}
calculator();