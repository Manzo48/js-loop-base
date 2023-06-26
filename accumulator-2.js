let arr = [1,2,3,4,5,6,7,-123,-12,-12];
let accumulator = 0
let i = 0;

while (i < arr.length){
    if (arr[i] > 0){
        accumulator += arr[i]
    }
    i++;
}

console.log(accumulator)