
let stackArr = [];

let word = prompt('Enter your palindrome word: ');

let revWord = '';

for(var i = 0; i < word.length; i++){
    stackArr.push(word[i]);
}

for(var i = 0; i < word.length; i++){
    revWord += stackArr.pop();
}

if(revWord === word){
    alert(word + " is a palindrome.")
}else{
    alert(word + " is not a palindrome.")
}