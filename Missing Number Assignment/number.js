//write an api which gives the missing number in an array of integers starting from 1.e.g [1,2,3,5,6,7]

// const array = [1, 2, 3, 5, 6, 7]

// let total = 0;

// for (var i in array){
// total += array[i];
// }
// let lastNumber = array.pop()
// let sum = lastNumber * (lastNumber + 1)/2
// missingNumber = sum - total
// console.log(missingNumber)


// -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing

const arr = [33, 34, 35, 37, 38]
let length = arr.length
let total = 0;
for (var i in arr){
    total += arr[i];
}

let firstNumber = arr[0]
let lastNumber = arr.pop()

consecutiveNumber = (length + 1) * (firstNumber + lastNumber) / 2
missingNumber = consecutiveNumber - total

console.log(missingNumber)

