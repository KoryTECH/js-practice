function callBottles (){
    var numBottles = prompt(`Enter the number of bottles for the number of bottles on the wall lyrics`);
    while (numBottles != 0) {
        if( numBottles <=1 ){
            document.write(`${numBottles} bottle on the wall, ${numBottles} bottles on the wall, take one down, pass it around, ${numBottles-1} bottle of beer on the wall <br>`);
        }
        else{
             document.write(`${numBottles} bottles on the wall, ${numBottles} on the wall, take one down, pass it around, ${numBottles-1} bottles of beers on the wall <br>`);
        }
         numBottles = numBottles - 1;
    }
}
callBottles();