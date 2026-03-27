var output = [];
    var count = 1;
    function fizzBuzz() {
      while (count <= 100) {
        if (count % 15 === 0) {
          output.push(`FizzBuzz`);
        } else if (count % 3 === 0) {
          output.push(`Fizz`);
        } else if (count % 5 === 0) {
          output.push(`Buzz`);
        } else {
          output.push(count);
        }
        count = count + 1;
        alert(output)
        console.log(output);
      }
    }
    fizzBuzz();