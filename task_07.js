function largestOfFour(arr) {

    let newArr = [];
    for (let i=0; i<arr.length; i++) {
        // Simple way - const max = Math.max(...arr[i]);
        // Handmade way:
        const max = () => {
            let temp = arr[i][0];
            arr[i].forEach(num => {
                if (num > temp) {
                    temp = num;
                }
            });
            return temp;
        };
        // end handmade way
        newArr.push(max());
    }
    console.log(newArr);
    return newArr;
}
  
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], 
                [1000, 1001, 857, 1]]);

/*
Return Largest Numbers in Arrays

Return an array consisting of the largest number 
from each provided sub-array. For simplicity, 
the provided array will contain exactly 4 sub-arrays.

*/