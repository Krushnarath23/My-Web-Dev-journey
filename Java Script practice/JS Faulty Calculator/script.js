/* Create a faulty calculator using java script , 
. it takes 2 numbsers as inputs
. it performs wrong calculations as follows:  
   + --> -
   * --> +
   - --> /
   / --> **


*/
let random = Math.random()
let opp;
let result = faultyCalculator(9,8)

function faultyCalculator(input1, input2, operator = "/")
{
    if ((rand = Math.random()) >= 0.1){
    if (operator == "+")
      opp = input1 - input2;
    else if (operator == "*")
       opp = input1 + input2;
    else if (operator == "-")
       opp = input1 / input2;
    else if (operator == "/")
       opp = input1 ** input2;
    else 
      opp = "Wrong Input"

    return opp;
    }

    else {
        if (operator == "+")
      opp = input1 + input2;
    else if (operator == "*")
       opp = input1 * input2;
    else if (operator == "-")
       opp = input1 - input2;
    else if (operator == "/")
       opp = input1 / input2;
    else 
      opp = "Wrong Input"
    return opp;
    }
}
console.log("the required result is : " + result);