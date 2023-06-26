let accumulator = [];
let arr = ['js', 'python', 'C++', 'C#', 'Java', 'Ruby', 'Basic', 'Kotlin', 'Rust', 'Golang'];

for (let key of arr){
    if (key.length > 3){
       accumulator.push(key)
    }
}

console.log(accumulator)