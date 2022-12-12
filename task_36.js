// How Many Numbers Are Smaller Than the Current Number
// Easy
// 4.2K
// 82
// Companies
// Given the array nums, for each nums[i] find out how many numbers in the array 
// are smaller than it. That is, for each nums[i] you have to count the number of 
// valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.

// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]

const smallerNumbersThanCurrent = (nums) => {
    const result = [];
    
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        const currentElement = nums[i];
        for (let j = 0; j < nums.length; j++) {
            if (currentElement > nums[j]) {
                count += 1;
            }
        }
        result.push(count);
    }
    return result;
};

console.log(smallerNumbersThanCurrent([8,1,2,2,3]));