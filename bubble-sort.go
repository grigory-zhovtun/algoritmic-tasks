package main

import "fmt"

func main() {
	arr := []int{2,5,11,6,888,-1,3,-23,909,45}

	fmt.Println(bubbleSort(arr))
}

func bubbleSort(arr []int) []int {
	flag := true
	for j := 0; j < len(arr); j++ {
		for i := 0; i < len(arr)-1-j; i++ {
			if arr[i] > arr[i+1] {
				arr[i], arr[i+1] = arr[i+1], arr[i]
				flag = false
			}
		}
		if flag {
			break
		}
	}
	return arr
}