function loveCalculator() {
      prompt(`Enter the first name for the love calculator`);
      prompt(`Enter the second name to get your love%`);
      var number = Math.random();
      var result = number * 101;
      result = Math.floor(result);
      alert(`Your love score is: ${result}`);
      document.write(`Your love score is: ${result}`)
    }
    loveCalculator();
