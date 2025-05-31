// ****************************   MAPS  ************************************//

let array = [1,33,5,77,23]
// let newArr = []
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     newArr.push(element ** 2)
//                                                                     // this is one way of doing a map
// }

//console.log(newArr)    

// the other way of doing the map is by :

// let newArr = array.map((e)=>{
//     return e**2
// })
// console.log (newArr)

// *********************************      FILTER      ************************************//

const greaterthanSeven = ((e) => {
    if (e > 7){
        return true
    }
    return false
})

console.log(array.filter(greaterthanSeven))