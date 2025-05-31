console.log ("Welcome to  arrays in java script")

let arr = [1,2,3,4]
// console.log(arr)
// console.log(arr.length)

// // in java script, strings are immutable , but arrays are mutable.

// console.log(arr[0])

let name = "krushna"
name[0] = "c"
console.log(name)
console.log(typeof arr)

// this is the join function that is used to join the elements in an array and is helpful when you will make frontend.

console.log(arr.join(" and "))

// pop function will remove the last element in that array.
console.log(arr.pop())
console.log(arr)

// push(a) function will add a at the last of the array.
console.log(arr.push(60))
console.log(arr.push("Krushna"))
console.log(arr)

// shift method is used to remove first element of that array ,
//unlike pop it removes the first element of that array.

// unshift is used to add the element in the start position of the array


console.log(arr.shift())
// this returns the first element of the array after removing .

console.log(arr)

console.log(arr.unshift("jack"))

let a1 = [2,3,5]
let a2 = [5,6,7]

console.log(a1.concat(a2))

// this splice method is used to remove the (total) numbers from the first mentioned positon. 
//for example as mentioned below , (2,3) means it will remove 3 elements from 2 index position including the element at 2nd index.

console.log(arr.splice(2,3))   // in the teminal it will directly print the elements that are removed.

console.log(arr.splice(2,3,4,5))
// here it will first remove 3 elements from 2nd index and then it will add back 4 and 5 in the place of the elements removed.



// slice function slices out a piece from an array it creates a new array

const num = [1,2,3,4]
console.log(num.slice(2)) // output will be  [ 3, 4 ]
console.log( num .slice(1,3)) // output will be [2,3]

// here it will start from the given index position to the specified index position without including the last index position.


