// Stack Array
let stackArr = [];

let word = prompt('Enter your palindrome word: ');

let revWord = '';
// looping through word string using its length and pushing the word elements to the stack array on every iteration.
for(var i = 0; i < word.length; i++){
    stackArr.push(word[i]);
}
// looping through word string using its length and adding the elements of stack array to the reverse word on every iteration.
for(var i = 0; i < word.length; i++){
    revWord += stackArr.pop();
}
// checking if the reversed word is the same thing with the original word given.
if(revWord === word){
    alert(word + " is a palindrome.")
}else{
    alert(word + " is not a palindrome.")
}