function everyOtherLetter(input){
    let word = ""
    for(let i = 0; i < input.length; i++){
        if(i % 2 == 0){
            word += input[i].toUpperCase()
        }
        else{
            word += input[i].toLowerCase()
        }
    }
    return word
}

console.log(everyOtherLetter("hello"))