//  1. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.

// your code here
function lengths(array) {
  array.forEach(function(el,index,array){
    array[index] = el.length;
  });
  return array;
}

var myArray = ["asfj","aslfjaslk","abc","askjfhk"];
console.log(lengths(myArray));

// 2. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.

// your code here
function transmogrifier (num1,num2,num3) {
  return Math.pow(num1*num2,num3);
}

// 3. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.

// your code here
function wordReverse(string) {
  var myArray = string.split("");
  return myArray.reverse().join();
}
