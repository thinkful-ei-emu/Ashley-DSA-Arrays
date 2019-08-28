//Question 5
// A common mistake users make when they type in an URL is to put spaces between words or letters. A solution that developers can use to solve this problem is to replace any spaces with a %20. Write a method that takes in a string and replaces all its empty spaces with a %20. Your algorithm can only make 1 pass through the string. Examples of input and output for this problem can be

// Input: tauhida parveen

// Output: tauhida%20parveen

// Input: www.thinkful.com /tauh ida parv een

// Output: www.thinkful.com%20/tauh%20ida%20parv%20een

function urlMaker(str) {

  // return str.replace(/ /g, '%20');

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      str = str.slice(0, i) + '%20' + str.slice(i + 1);
    }
  }

  return str;

}

// console.log(urlMaker('tauhida parveen'));
// console.log(urlMaker('www.thinkful.com /tauh ida parv een'));

//Question 6 

// Imagine you have an array of numbers. Write an algorithm to remove all numbers less than 5 from the array. 
//DO NOT use Array's built-in .filter() method here; write the algorithm from scratch.

function filter(arr) {

  let filteredArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 5) {
      filteredArr.push(arr[i]);
    }
  }

  return filteredArr;

}

//O(n)
// console.log(filter([1, 5, 10, 20, 50]));

// You are given an array containing positive and negative integers. 
//Write an algorithm which will find the largest sum in a continuous sequence.

// Input: [4, 6, -3, 5, -2, 1]
// Output: 12

function findMaxSum(arr) {
  let max = 0;
  let current = 0;

  for (let i = 0; i < arr.length; i++) {
    current = current + arr[i];

    if (current > max) {
      //only updates max if current is greater than max
      max = current;
    }
  }

  return max;
}

//O(n)
// console.log(findMaxSum([4, 6, -3, 5, -2, 1]));

// Imagine you have 2 arrays which have already been sorted. 
//Write an algorithm to merge the 2 arrays into a single array, which should also be sorted.

// Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
// Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]

function mergeArray(arrOne, arrTwo) {

  let arrLength = arrOne.length + arrTwo.length;
  let mergedArr = [];

  for (let i = 0; i < arrLength; i++) {

    if (arrOne > arrTwo) {
      mergedArr.push(arrTwo.shift());
    }
    else {
      mergedArr.push(arrOne.shift());
    }

  }

  return mergedArr;


}

//O(n)
// console.log(mergeArray([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));

//Question 9

// Write an algorithm that deletes given characters from a string. For example, given a string of "Battle of the Vowels: Hawaii vs. Grozny" and the characters to be removed are "aeiou", the algorithm should transform the original string to "Bttl f th Vwls: Hw vs. Grzny". Do not use Javascript's filter, split, or join methods.

// Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
// Output: 'Bttl f th Vwls: Hw vs. Grzny'



function removeVowels(str, conditions) {

  let newStr = '';
  for (let i = 0; i < str.length; i++) {

    if (!conditions.includes(str[i])) {
      newStr += str[i];
    }

  }

  return newStr;


}

//O(n)
// console.log(removeVowels('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));

// Given an array of numbers, 
//write an algorithm to find out the products of every other number except the number at each index.

// Input:[1, 3, 9, 4]
// Output:[108, 36, 12, 27]

function products(arr) {

  let products = [];

  for (let i = 0; i < arr.length; i++) {

    let product = 1;

    for (let j = 0; j < arr.length; j++) {
      if (j !== i) {
        product *= arr[j];
      }
    }

    products.push(product);

  }

  return products;
}

// console.log(products([1, 3, 9, 4]));

// Write an algorithm which searches through a 2D array, 
//and whenever it finds a 0 should set the entire row and column to 0.

// Input:
// [[1,0,1,1,0],
// [0,1,1,1,0],
// [1,1,1,1,1],
// [1,0,1,1,1],
// [1,1,1,1,1]];
// Output:
// [[0,0,0,0,0],
// [0,0,0,0,0],
// [0,0,1,1,0],
// [0,0,0,0,0],
// [0,0,1,1,0]];

function twoDarr(arr) {
  for(let i = 0; i < arr.length; i++){
    for(let j=0; j < arr[i].length; j++)
  }
}

const maze =[
  [1, 0, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1]
];

console.log(twoDarr(maze));