function lifeInWeeks(){
    var age = prompt(`Enter your age`);
    var yearsLeft = 90 - age;
    var days = yearsLeft * 365;
    var weeks = yearsLeft * 52;
    var month = yearsLeft * 12;
    alert(`you have ${days}days,${weeks}weeks,${month}months,${yearsLeft}years to live before 6ft☠👻 `);
    document.write(`you have ${days}days,${weeks}weeks,${month}months,${yearsLeft}years to live before 6ft☠👻`);
}

lifeInWeeks();