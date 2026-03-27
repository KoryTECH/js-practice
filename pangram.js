function isPangram(string) {
    string = string.toLowerCase();
    let words = string.split('');
    const alphabets= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
                      'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for (let index = 0; index < words.length; index++) {
        if (!words.includes(alphabets[index])){
        return  false
    }
        return true 
    }
}
isPangram(`The quick brown fox jumped over the lazy dog`);