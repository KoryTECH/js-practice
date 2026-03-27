function pallandrium() {
    var word = prompt(`Enter any word to check if its pallandrium`)
    splitted = word.split('').reverse().join('')
    console.log(word === splitted);
    
}
pallandrium();