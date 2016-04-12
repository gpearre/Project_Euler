var numbers = [];

for (i=0; i<1000;i++)
{
	if(i%3===0 || i%5===0){
		console.log(i);
		numbers.push(i);
	}
}

var sum = 0;
for (i=0; i<numbers.length; i++) {
	sum = sum + numbers[i];
}

console.log (sum);