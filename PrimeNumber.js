const range = 1000;

// Delaring an array of length 'range+1'
is_prime = Array.from({ length: range + 1 });

// Calling Sieve Of Eratosthenes function
SieveOfEratosthenes(is_prime, range);

// 'number' will hold a random number in
// the range [0, range]
let number = Math.floor(Math.random() * range);
// Since we know that 1 is neither prime nor composite.
if (number == 1) {
   console.log(" 1 is neither prime nor composite");
}

// This is the condition we are concerned about
// i.e. any positive number greater than 1.
else if (number > 1) {
   if (is_prime[number] == true) console.log(`${number} is a prime number`);
   // Otherwise no divisor was found.
   else console.log(`${number} is not a prime number`);
}

// If the number is less than 1 (either 0 or negative)
// then we can say it is not a prime number.
else {
   console.log(`${number} is not a prime number`);
}

function SieveOfEratosthenes(is_prime, n) {
   // Mark all entries of is_prime to be true.
   for (let i = 0; i <= n; i++) is_prime[i] = true;
   for (let i = 2; i <= Math.sqrt(n); i++) {
      // If is_prime[i] is true, mark
      // all multiple of i (say 'j') as
      // false such that j >= i*i
      if ((is_prime[i] = true)) {
         for (let j = i * i; j <= n; j += i) {
            is_prime[j] = false;
         }
      }
   }
}

/**
 * My Logic For FInding Prime Number
*/
findPrimeUpToNumbers = 1000;
(
    findPrime = (number) =>{
        const divisiblePrime = [2,3,5,7,11];
        is_number_prime = true;
        if(number === 1)
            return console.log(`1 neither be prime 1 can only be divided by one number, 1 itself, \n so with this definition 1 is not a prime number.`);
        else if(divisiblePrime.includes(number))
            is_number_prime = true;
        else if(Math.sqrt(number)%1 == 0 )
            is_number_prime = false;
        else
            for(let i = 0; i < divisiblePrime.length; i++) {
                if(number%divisiblePrime[i] === 0){
                    is_number_prime = false;
                    break;
                }
            }       
        return console.log(`Number ${number} is ${is_number_prime ? '' : 'not'} prime number`);
    }
)(31);
//Math.floor(Math.random() * findPrimeUpToNumbers)
