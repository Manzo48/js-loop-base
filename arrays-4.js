let arr = ['js', 'python', 'C++', 'C#', 'Java', 'Ruby', 'Basic', 'Kotlin', 'Rust', 'Golang'];

let i = 0;
while (i < arr.length){
    let language = arr[i]
    if (language.length > 3){
        console.log(language)
    }
    i++;
}