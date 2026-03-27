function solution(number){
    var total = 0
    for (let i = 0; i < number; i++) {
        if (number < 0){
            console.log(0)
        }
        else if ( i % 3 === 0 || i % 5 === 0){
            total+=i
        }
    }
    console.log(total);
}
solution(1);