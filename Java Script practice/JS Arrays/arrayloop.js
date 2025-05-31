let a = [1,24,3,23,77]
//console.log(a[3])

// this is the traditional for loop statement.

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element)
    
// }

// now lets just look into the foreach loop
a.forEach((value, index, arr) => {
    console.log(value, index, arr)
});
// there are also for in loop and for of loop.
