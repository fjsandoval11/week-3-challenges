const hasMoreVowels = (word) => {
    word = word.toLowerCase()
    let varCount = 0
    let array =['a','e','i','o','u']

    for (let i= 0; i < word.length; i++){
        for (let j = 0;j < array.length; j++) {
            if (word[i] === array[j]) {
                varCount++
            }
        }
    }
  return varCount > word.length / 2
}

console.log(hasMoreVowels('moose'))