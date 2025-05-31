console.log("hey this is a script file");
var a = 11;
var b = 66;
var c = "Krushna";
console.log(a + b + " " + c);
console.log(typeof a, typeof b, typeof c);


// why we should not use var but let should be used;

// var is globally scoped 
//let is block scoped


/*for example :

    var a = 6;

    {
        var a = 55;
        console.log(a);       
    }
    console.log(a);

    here the answer will be 
    55
    55



    but in case of let 
    the answer will be printed as : 
    55
    6



    HENCE ALWAYS MAKE THE USE OF LET IN PLACE OF VAR.

*/

/*

     all the primitive data types in javascript are:
     
    1. Number:
    2. String:
    3. Boolean:
    4. Undefined:
    5. Null:
    6. Symbol:
    7. BigInt:
*/

let a1 = 6;
let x = "Krushna";
let y = 22;
let z = 33.45;
const p = 22;
let r = undefined;
let t = null;
console.log(x,a1,y,z,p,r,t);
console.log(typeof a1, typeof x, typeof y, typeof z, typeof p, typeof r, typeof t);



// lets create an object in java script 

let object = {
    "name": "Krushna",
    "job role" : "software engineer",
    "age": 22
}

console.log(object);
object.salary = 800000;
console.log(object);
object["company"] = "Data Patterns";
console.log(object);