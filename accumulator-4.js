let arr = ['Adam', 'Adam2', 'Mohmad', 'Ramzan', 'Ali', 'AbduRohman', 'Mohmad2', 'Ibrahim', 'Mohmad3', 'Mohmad4'];
let accumulator = []

for (let key of arr){
    if (key[0] === 'A'){
        accumulator.push(key)
    }

}

console.log(accumulator)