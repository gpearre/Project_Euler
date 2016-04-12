var nums = [1,2];
var sum = 0;


while (nums[nums.length-1] < 4000000){
	nums.push(nums[nums.length-2] + nums[nums.length-1]);
	console.log(nums[nums.length-1]);
}

for(i=0; i<nums.length; i++){
	if(nums[i]%2===0){
		console.log(nums[i]);
		sum += nums[i];
	}
}
console.log ("The sum of the even numbers is: " + sum);