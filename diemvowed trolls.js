function disemvowel(str) {
  let word = str.split('')
  var vowels = [`a`,`e`,`i`,`o`,`u`];
  for (let index = 0; index < word.length; index++) {
    if (vowels.includes(word[index])){
      let result = vowels.filter(item => !word.includes(item))
      console.log(result)
    }
    else {
      console.log(word)
    }
  }
}
disemvowel(`korede`);