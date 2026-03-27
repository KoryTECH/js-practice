function numberGuessingGame(){
    var quest = prompt(`Do you want to play the number guessing game? Yes or no?`);
    var quest = quest.toLowerCase();
    if (quest === "yes"){
        var guessedNum = parseInt(prompt(`Guess a number from 1-10`)); 
        if (guessedNum > 10){
            alert(`i stated that from 1-10 not 11 and above`)
            numberGuessingGame();
        }
        else if (guessedNum < 1){
            alert(`i stated that 1-10 not 0. and below`)
            numberGuessingGame();
        }
        else {
            var nil = Math.random();
        nil = nil * 10;
        nil = Math.floor(nil);
        console.log(nil);
            if(guessedNum === nil){
                alert(`You got it right`);
                console.log(`You got it right`);
                numberGuessingGame();
            }
            else{
                alert(`Wrong`);
                console.log(`Wrong`);
                numberGuessingGame();
            }
        }
    }
    else if(quest === "no"){
        numberGuessingGame();        
    }
    else {
        alert(`you did not enter anything`);
        numberGuessingGame();
    }
}
numberGuessingGame();