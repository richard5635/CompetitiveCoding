/*
    The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
    Find the sum of all the primes below two million.
*/

//This one is too slow. It is recommended to use another algorithm.

function isPrime(num) {
    for(var i = 2; i < num; i++)
    {
        if(num % i === 0) return false;
    }
    return num !== 1;
}

function primeStoreUntil(num) {
    var primeArrayTwo = [];
    var integer = 1;
    for (var i = 2; i < num; i++) {
        if(isPrime(i))primeArrayTwo.push(i);
    }

    return primeArrayTwo;
}

function sumAllPrimesBelow(num)
{
    var primeArray = [];
    primeArray = primeStoreUntil(num);
    var sumOfPrime = 0;
    for(var i = 0; i< primeArray.length; i++)
    {
        sumOfPrime += primeArray[i];
    }
    return sumOfPrime;
}

//Sieve of Eratosthenes Algorithm
/*
    1. Checks 
*/

function simpleSieve(num)
{
    var sieve = [num+1];
    sieve[0] = true; sieve[1] = true; sieve[2] = false;

    for(var i = 4; i<= num; i += 2)
    {
        sieve[i] = true;
    }

    var limit = Math.floor(Math.sqrt(num)+1); 
    for(var i=3; i<limit; i+=2)
    {
        if(!sieve[i])
        {
            for(var j = i * i; j <= num; j += i)
            {
                sieve[j] = true;
            }
        }
    }
    return sieve;
}

function sumOfPrimes(num)
{
    var primes = simpleSieve(num);
    var sumOfPrime = 0;

    for(var i = 0; i < primes.length; i++)
    {
        if(!primes[i])
        {
            sumOfPrime += i;
        }

        return sumOfPrime;
    }
}


(function euler010() {
    var maxPrimeValue = 2e+6;
    var i = maxPrimeValue;
    var sum = 0;
  
    // while primes is less than the sought after number
    while (i >= 2) {
      if (isPrime(i) === true) {
        sum += i;
      }
  
      i--;
    }
  
    function isPrime(n) {
      var x = Math.floor(Math.sqrt(n));
      var j = x;
  
      while (j >= 2) {
        if (n % j === 0) {
          return false;
        }
        j--;
      }
  
      return true;
    }
  
    console.log(sum);
    return sum;
  }());