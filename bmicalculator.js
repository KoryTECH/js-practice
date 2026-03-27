
    var weight = prompt(`Enter your weight`);
    var height = prompt(`Enter your height`);
    function bmi() {
      height = height / 100;
      var bmiCalculated = weight / (height * height);
      alert(bmiCalculated);
      document.write(bmiCalculated)
    }
    bmi();
