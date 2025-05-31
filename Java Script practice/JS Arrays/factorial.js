let num = 6

const fact = ((num) => {
    let temp = num;
    while(num > 1){

        temp = temp*(num-1)
        num = num - 1
    }
    return temp
})

console.log(fact(num))
