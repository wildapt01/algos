// isPalindrome

// input: a string, output: a Boolean
// function which checks if a string can be read
// backwards as well as forward

// iteration
const isPalindrome = str => {
  let string = str
    .replace(/[^\w]/gi, '') // replace all non-words characters
    .toLowerCase(); // make all characters lower cased
  return (
    string ===
    string
      .split('')
      .reverse()
      .join('')
  );
};

// recursion
const isPalindrome = str => {
  let len = str.length;
  if (len < 2) return true;
  if (str[0] === str[len - 1]) return isPalindrome(str.slice(1, len - 1));
  return false;
};

// iteration with pointers O(n) time, O(1) space
const isPalindrome = str => {
  let leftIndx = 0;
  let rightIndx = str.length - 1;
  while (leftIndx < rightIndx) {
    if (str[leftIndx] !== str[rightIndx]) return false;
    leftIndx++;
    rightIndx--;
  }
  return true;
};

//******************************************************************* */
// Two-numbers Sum

// APPROACH: Brute force ==> 2 loops but O(n square) in time
// Other strategy ==> a hash table and storing the current value.
// Hash table because it has a O(1) look-up time.
// time and space complexity is then O(n)
// EDGE CASES are array.length = 1 or 2, 2 equal values in array can be used to get targetsum
// Ex: [3, -1, 0, 3] & targetsum is 6

// Other solution with left & right pointers, going toward the center.The input array needs to be sorted O(n(log(n))) in time, but O(1) in space

const twoNumSum = (arr, target) => {
  const ref = {};
  for (const num of arr) {
    const diff = target - num;
    if (diff in ref) {
      return [num, diff].sort((a, b) => a - b);
    } else {
      ref[num] = true;
    }
  }
  return [];
};

//******************************************************************* */
// Closest value in BST

// Iteration (While loop)
// Avg O(log(n)) in time | O(1) in space
// Worst O(n) in time | O(1) in space

const closestVal = (tree, target) => {
  return helper(tree, target, Infinity);
};

const helper = (tree, target, closest) => {
  let current = tree;

  while (current !== null) {
    if (Math.abs(target - closest) > Math.abs(target - current.value)) {
      closest = current.value;
    }
    if (target < current.value) current = current.left;
    if (target > current.value) current = current.right;
    if (target === current.value) break;
  }
  return closest;
};

// Recursion
// Avg O(log(n)) in time | O(log(n)) in space
// Worst O(n) in time | O(n) in space

const helperTwo = (tree, target, closest) => {
  if (tree === null) return closest;

  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value;
  }
  if (target < tree.value) {
    return helperTwo(tree.left, target, closest);
  } else if (target > tree.value) {
    return helperTwo(tree.right, target, closest);
  } else {
    return closest;
  }
};

//******************************************************************* */
// Nth Fibonacci number

// Recusion, with O(2^n) time complexity
const fib = n => (n <= 2 ? n - 1 : fib(n - 1) + fib(n - 2));

// Memoization, with O(n) time complexity
// _.memoize could also be used
const fib = (n, memo = { 1: 0, 2: 1 }) =>
  n in memo ? memo[n] : fib(n - 1, memo) + fib(n - 2, memo);

//******************************************************************* */
// Merge sort

// APPROACH: typically "divide and conquer"
// 1st step is to split the input array down to a chain of arrays with only one element each, sub-array.length = 1

// Then, with recursion the single element arrays are
// recombined in ascending order, comparing the first
//element of each. The lowest is added to the result array

const merge = (arr1, arr2) => {
  const result = [];
  while (arr1.length > 0 && arr2.length > 0) {
    result.push(arr1[0] < arr2[0] ? arr1.shift() : arr2.shift());
  }
  return [...result, ...arr1, ...arr2];
};

const mergeSort = arr => {
  // Base case
  if (arr.length < 2) return arr;

  const mid = Math.floor(arr.length / 2);

  // Recursion
  const subLeft = mergeSort(arr.slice(0, mid));
  const subRight = mergeSort(arr.slice(mid));

  return merge(subLeft, subRight);
};

//******************************************************************* */
// Binary search

// APPROACH:
// 1st step is defining the middle of the list of numbers.
// If the target is not in one of the halves, that half is eliminated
// Gives a time complexity of O(log(n)),
// space complexity is O(log(n)) if recursion, O(1) if iteration

const binSearch = (arr, target, start = 0, stop = arr.length - 1) => {
  let mid = Math.floor((start + stop) / 2);

  while (arr[mid] !== target && start < stop) {
    target < arr[mid] ? (stop = mid - 1) : (start = mid + 1);
    mid = Math.floor((start + stop) / 2);
  }
  return arr[mid] !== target ? -1 : mid;
};

//******************************************************************* */
// Caesar Cipher

// APPROACH:
// Using methods giving the Unicode value of a character, and the opposite.
// String.fromCharCode(int) | str.charCodeAt(indx)
// Cases to keep in mind: key > 26 and newletter > 26. Need to wrap around alphabet
// Several ways, all O(n) time and space.
// Here using a helper function to create a Dictionnary object (O(1) look-up time)

function caesarCipherEncryptor(string, key) {
  const newKey = key % 26;
  const dictionnary = makeDictionnary('a');
  let newStr = '';

  for (const letter of string) {
    const newLetterCode = letter.charCodeAt(0) + newKey;
    const newLetter =
      newLetterCode <= 122
        ? dictionnary[newLetterCode]
        : dictionnary[newLetterCode - 26];
    newStr += newLetter;
  }
  return newStr;
}

function makeDictionnary(start) {
  const dictionnary = {};
  for (i = 0; i < 26; i++) {
    dictionnary[start.charCodeAt(0) + i] = String.fromCharCode(
      start.charCodeAt(0) + i
    );
  }
  return dictionnary;
}
//******************************************************************* */
// Bubble Sort

// Write a function which takes in an array of integers and returns the
// array sorted. Use Bubble Sort.

//[8, 5, 2, 9, 5, 6, 3] ==> [2, 3, 5, 5, 6, 8 , 9]

// APPROACH:
//  Traverse the input array, swapping any two numbers that are out of // order and keeping track of any swaps that you make. Once you arrive // at the end of the array, check if you have made any swaps; if not,  // the array is sorted and you are done; otherwise, repeat the steps
// laid out in this hint until the array is sorted.

// Best: O(n) time, O(1) space. Average & worst: O(n^2) time, O(1) space

const bubbleSort = array => {
  let sorted = false;
  let counter = 0;
  while (!sorted) {
    sorted = true;
    for (i = 0; i < array.length - 1 - counter; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        sorted = false;
      }
    }
    counter++;
  }
  return array;
};

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};
//******************************************************************* */
// Flatten Array

// Write a function which flatten nested arrays and removes the duplicates.
// Consider 2 levels of nesting and N levels of nesting. Keep the elements of the
// input array in the same order.

// USE ES6 syntax
// DO NOT USE: for or while loops

// INPUT array2 = [2,5,3,"art",[5,1,"test", 18,12,4],11,["beta", 7],"test"]
// INPUT arrayN = [2,5,3,"art",[5,1,["test", 18,[12]],4],11,"beta", 7,"test"];
// OUTPUT: [ 2, 5, 3, 'art', 1, 'test', 18, 12, 4, 11, 'beta', 7 ]

// Flattens array with 2 levels of nesting, & removes duplicates
const flattenTwoLevels = arr => {
  return [...new Set([].concat(...arr))];
  //  return Array.from(new Set([].concat(...arr)));
};

// Flattens array with N levels of nesting, recursively, & removes duplicates
const flattenNLevels = arr => {
  if (arr.some(item => Array.isArray(item))) {
    arr = flattenNLevels(Array.from(new Set([].concat(...arr))));
  }
  return arr;
};

//******************************************************************* */
// Insertion Sort

// Write a function which takes in an array of integers and returns the
// array sorted. Use Insertion Sort.

//[8, 5, 2, 9, 5, 6, 3] ==> [2, 3, 5, 5, 6, 8 , 9]

// APPROACH:
// First element of input array is sorted, then take the next and swap if inferior
// to the preceding element. Do until reaching the end of the input array.
// Good and fast for small arrays (<50 elements), faster than Quicksort.
// Not efficient for large arrays.

// O(n) time at best, O(n^2) avg and worst. O(1) space.

const insertionSort = array => {
  for (let i = 1, j; i < array.length; i++) {
    let currentVal = array[i];
    for (j = i - 1; j > -1 && array[j] > currentVal; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = currentVal;
  }
  return array;
};

// Other way with helper function swap
const insertionSort = array => {
  for (let i = 1, j = i; i < array.length; i++) {
    while (j > 0 && array[j] < array[j - 1]) {
      swap(array, j, j - 1);
      j -= 1;
    }
  }
  return array;
};

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

//******************************************************************* */
// Palindrome number

// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
// Example 1:
// Input: 121
// Output: true
// Example 2:
// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:
// Input: 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// Follow up:
// Coud you solve it without converting the integer to a string?

const isPalindrome = int => {
  const reversedInt = Number(
    int
      .toString()
      .split('')
      .reverse()
      .join('')
  );
  return int === reversedInt;
};

// Follow up: no string convertion
const isPalindrome = int => {
  let rem = 0;
  let final = 0;
  const temp = int;

  while (int > 0) {
    rem = int % 10;
    int = Math.trunc(int / 10);
    final = final * 10 + rem;
  }

  return temp === final;
};

//******************************************************************* */

/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Note:
All given inputs are in lowercase letters a-z.*/

const test1 = ['flower', 'flow', 'flight']; // ==> "fl"
const test2 = ['dog', 'racecar', 'car']; // ==> ""

const funct = strs => {
  let result = '';
  if (!strs.length) return result;
  for (let i = 0; i < strs[0].length; i++) {
    const start = strs[0].slice(0, i + 1);
    if (strs.every(word => word.startsWith(start))) {
      result = start;
    } else {
      break;
    }
  }
  return result;
};

// Roman to integer

/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.
*/
// Examples
// romToInt("III") ==> 3
// romToInt("IV") ==> 4
// romToInt("IX") ==> 9
// romToInt("LVIII") ==> 58
// romToInt("MCMXCIV") ==> 1994

const romToInt = s => {
  let result = 0,
    counter = 0;
  const dict = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };

  while (counter < s.length) {
    const single = dict[s[counter]];
    const double = dict[s.slice(counter, counter + 2)];
    if (double) {
      result += double;
      counter += 2;
    } else {
      result += single;
      counter++;
    }
  }
  return result;
};

// Valid Parenthesis

/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

const test1 = ''; // true
const test2 = '()'; // true
const test3 = '()[]{}'; // true
const test4 = '(]'; // false
const test5 = '([)]'; // false
const test6 = '{[]}'; // true
*/

const isValid = str => {
  if (!str) return true;

  const open = ['{', '(', '['];
  const close = ['}', ')', ']'];
  const stack = [];

  for (let par of str) {
    if (close.includes(par)) {
      const current = stack.pop();
      if (!current || current !== open[close.indexOf(par)]) return false;
    } else {
      stack.push(par);
    }
  }
  return !stack.length;
};
