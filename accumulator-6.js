let arr = [1,2,3,4,5,6,7,8,9,19];
let accumulatorOdd = []

for (let key of arr){
    if (key % 2){
        accumulatorOdd.push(key)
    }
}

console.log(accumulatorOdd)