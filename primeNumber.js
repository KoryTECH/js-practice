function isPrime(num) {
    if ( num <= 1){
      return false;
    }
    else if ( num === 2){
      return true;
    }
    else if( num % 2 === 0 ){
      return false;
    }
    else {
      for (let i = 3; i > 0; i++) {
        if (i * i <= num ){
          if ( num % i === 0){
            return false;
          }
          else {
            i += 2;
          }
        }
        else {
          return true;
        }
      }
    }
  
}

isPrime(8);