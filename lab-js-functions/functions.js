// Question 1
function maxOfTwoNumbers(num1, num2) {
  return Math.max(num1, num2);

}

console.log(maxOfTwoNumbers(123, 343));

// Question 2
function maxOfThree(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}

console.log(maxOfThree(1253, 23623, 2342));

// Question 3
function isCharacterAVowel(x) {
  x = x.toLowerCase();
  if (x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u') {
    return true;
  } else {
    return false;
  }
}

console.log(isCharacterAVowel('e'));

// Question 4
var totalCount = 0;
var myArray = [2, 4, 6, 8];

function sumArray(x) {
  for (i = 0; i < x.length; i++) {
    totalCount += x[i];
  }
  return totalCount;
}

console.log(sumArray(myArray));

// Question 4
var total = 1;
function multiplyArray(x) {
  for (i = 0; i < x.length; i++) {
    total *= x[i];
  }
  return total;
}

console.log(multiplyArray(myArray));

// Question 5
function reverseString(text) {
var rString="";
  for (i=text.length-1; i>=0; i--) {
    rString += text[i];
  }
  return rString;
}

console.log(reverseString("General Assembly"));

// Question 6
function findLongestWord(arrayName) {
  var longest = "";

  for (var i = 0; i < arrayName.length; i++) {
    if (arrayName[i].length > longest.length) {
      longest = arrayName[i];
    }
  }
  return longest.length;
}

var nameArray = ["bob", "terry", "john", "sullivan"];

console.log(findLongestWord(nameArray));

// Question 7

function filterLongWords(wordArray, setNum) {
  var removedItems = [];

  for (var i = 0; i < wordArray.length; i++) {
    if (wordArray[i].length < setNum) {
      removedItems.push(wordArray[i]); /*adds relevant array items into removedItems array*/
    }
  }
  return removedItems;
}

console.log(filterLongWords(nameArray, 5));

// Bonus 1
Object.prototype.reverseString = function() {
  return this.split('').reverse().join('');
};
console.log("General Assembly".reverseString());


// Bonus 2
function countOccurences (myString) {
//change to lower case and remove all white spaces from string and put individual characters into myArray in alphabetical order
  var myArray = myString.toLowerCase().replace(/\s/g,'').split("").sort();

//apply reduce() to loop through array, taking the result of function(allChar, char) and storing it in countedNames
var countedNames = myArray.reduce(function (allChar, char) {

//starting from 1st position of array, if character is found in any part of allChar, add to the count of that character in allChar
  if (char in allChar) {
    allChar[char]++;
  }

//starting from 1st position of array, if character is not found in any part of allChar besides its current position, set its count to 1
  else {
    allChar[char] = 1;
  }

//return allChar array
  return allChar;
}, {}); // {} after the comma is empty array which stores the result of each iteration of function(allchar, char)

console.log(countedNames);
}

countOccurences("assassination");



  // Bonus 3
  var numberOfArguments = function() {
      return args.length;
}

debugger;
