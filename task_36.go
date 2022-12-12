package main

import "fmt"

func main() {
	nums := []int{8,1,2,2,3}
	fmt.Println(smallerNumbersThanCurrent(nums))
}

func smallerNumbersThanCurrent(nums []int) []int {
    result := []int{}

	for i := 0; i < len(nums); i++ {
		count := 0
		currentElement := nums[i]
		for j := 0; j < len(nums); j++ {
			if currentElement > nums[j] {
				count ++
			}
		}
		result = append(result, count)
	}
	return result
}

// for (let i = 0; i < nums.length; i++) {
// 	let count = 0;
// 	const currentElement = nums[i];
// 	for (let j = 0; j < nums.length; j++) {
// 		if (currentElement > nums[j]) {
// 			count += 1;
// 		}
// 	}
// 	result.push(count);
// }
// return result;