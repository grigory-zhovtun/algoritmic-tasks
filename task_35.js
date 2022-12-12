// selection sort

const selectionSort = (nums) => {
    for (let j = 0; j < nums.length; j++) {
        const min_ind = j;
        for (let i = j + 1; i < nums.length; i++) {
            if (nums[min_ind] > nums[i]) {
                [nums[min_ind], nums[i]] = [nums[i], nums[min_ind]];
            }
        }
    }
    return nums;
};

console.log(selectionSort([4,0,1,1,3]))