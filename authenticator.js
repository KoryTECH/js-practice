function passwordAutenticty(){
    code = prompt(`Enter the password you want to test the strength`);
    let password = code.split('');
    const upperCase = [`A`,`B`,`C`,`D`,`E`,`F`,`G`,`H`,`I`,`J`,`K`,`L`,`M`,`N`,`O`,`P`,`Q`,`R`,`S`,`T`,`U`,`V`,`W`,`X`,`Y`,`Z`];
    var lowerCase = upperCase.map(str => str.toLowerCase());
    let numbers = [`0`,`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`];
    const signs = [`!`,`@`,`#`,`$`,`%`,`^`,`&`,`(`,`)`,`_`,`-`,`=`,`+`,`?`,`/`,`,`,`:`,`;`,`'`,`|`,];
    let length = false;
    let hasUppercase = false;
    let hasLowercase = false;
    let hasNumbers = false;
    let hasSigns = false;
    for (i=0; i<password.length; i++){
        if (upperCase.includes(password[i])){
            hasUppercase = true;
        }
        if (password.length > 8){
            length = true;
        }
        if (lowerCase.includes(password[i])){
            hasLowercase = true;
        }
         if (numbers.includes(password[i])){
            hasNumbers = true;
        }
         if (signs.includes(password[i])){
            hasSigns = true;
        }
    }
   if (
       length === true && hasUppercase === true && hasLowercase === true && hasSigns === true && hasSigns === true      
   ){
       console.log(`Password is strong`)
       alert(`Password is strong`)
   }

    else {
        console.log(`Password is weak`)
        alert(`Password is weak`)
    }
    return lowerCase
}
passwordAutenticty()   