function armStrongNumbers(number){
    num = String(number)
    splitted = num.split('');
    var firstNum = splitted[0]**num.length;
    var secondNum = splitted[1]**num.length;
    var thirdNum = splitted[2]**num.length;
    var result = firstNum + secondNum + thirdNum;
    console.log(number === result)
}
armStrongNumbers(371);