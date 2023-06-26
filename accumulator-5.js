let arr = [1,23,3,6,7,8,9,10,12, 5];
let accumulatorEven = []

for (let key of arr){
    if (key % 2 === 0){
        accumulatorEven.push(key)
    }
}
console.log(accumulatorEven)