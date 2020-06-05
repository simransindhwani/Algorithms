// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    var counter=0;
    let checker= ["a","e","i","o","u"];
    for(let char of str.toLowerCase())
    {
        if(checker.includes(char))
            counter++;
    }
    return counter;
}

module.exports = vowels;
