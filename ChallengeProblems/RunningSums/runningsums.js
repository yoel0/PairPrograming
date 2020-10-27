// We define the function runningSum which will take in the parameter of nums.
// We use a for Loop to iterate over the list of nums starting at 1st index.
// At each nth value we add the current value to the previous value.
// Adding nth to nth - 1.
// Lastly we return the nums!
const runningSum = nums => {
	for (let i = 1; i < nums.length; i++) {
		nums[i] = nums[i] + nums[i - 1];
	}

	return nums;
};

console.log(runningSum([1,2,3,4,5]));
// Will return [1, 3, 6, 10, 15]