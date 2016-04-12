var x = 600851475143 ;
var primes = [];

var isNumPrime = function(number){
    if (isNaN(number) || number%2 ===0){
		console.log (number + " is not prime");
		return false;
	}
	else
	{
		for(var i=3; i<number; i+=2){
			if (number%i === 0){
				console.log(number + " is not prime");
				return false;
			}
		}
	}
	console.log(number + " is PRIME!!");
	return true;
};

for(i=1; i <= x; i++){
	if (isNumPrime(i)){
		if(x%i===0){
			primes.push(i);
			x = x/i;
            console.log("x is now equal to " + x);
		}
	}
}

console.log (primes[primes.length-1]);
