function simpleMultiplication(number) {
    if ( number % 2 === 0 ){
      return  number * 8
    }
    else if (number === 1) {
      return 1
    }
    else {
      return number*9
    }
}
simpleMultiplication(5);