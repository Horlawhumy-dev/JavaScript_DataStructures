// Accesing all the array iterators methods

let numArr = [];

for(var i = 0; i < 20; i++){
    numArr[i] = Math.floor(Math.random() * 101);
}

console.log(numArr);

const randomNumArr = numArr.map( ranNum => {
   return ranNum % 2 !== 0;
})

const randomNumArr = numArr.filter(num => {
    return num % 2 == 0
})

const randomNumArr = numArr.every(num => {
    return num % 2 == 2;
})


const randomNumArr = numArr.some(num => {
    return num % 2 == 0
})

const totalArr = numArr.reduce((total, currentValue) => {
    return total + currentValue;
}, 0)

console.log(totalArr);
console.log(randomNumArr);

randomNumArr.forEach((num, index) => {
    if(num - index > 0){
        console.log(`${num} is greater than index ${index}`)
    }else if(num - index === 0){
        console.log(`${num} is equal to index ${index}`)
    }
    else{
        console.log(`${num} is less than index ${index}`)
    }
   
})

// Matrix Array of Multidimensional 
Array.Matrix = (numrows, numcols, element) => {
    let row = [];
    for(var i = 0; i < numrows; ++i){

        let column = [];
        for(var j = 0; j < numcols; ++j){
            column[j] = element++;
        }

        row[i] = column;
    }
    return row;
}
console.log(Array.Matrix(5, 4, 0));
const num = Array.Matrix(5, 4, 0);
console.log(`${num[2][3]} is at position row 3 column 4`)


