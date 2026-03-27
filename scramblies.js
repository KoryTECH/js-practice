function scramblie(firstString, secondString) {
    firstString = firstString.split('').sort.join('');

    secondString = secondString.split('').sort.join('');

    for (i =0; i<str.length; i++){
        if(firstString.indexOf(secondString[i]) === -1){
            return false;
        }
    }
    return true;

}