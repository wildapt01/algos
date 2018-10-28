// isPalindrome

// input: a string, output: a Boolean
// function which checks if a string can be read
// backwards as well as forward

// iteration
const isPalindrome = str => {
  let string = str
    .replace(/[^\w]/gi, "") // replace all non-words characters
    .toLowerCase(); // make all characters lower cased
  return (
    string ===
    string
      .split("")
      .reverse()
      .join("")
  );
};

// recursion
const isPalindrome = str => {
  let len = str.length;
  if (len < 2) return true;
  if (str[0] === str[len - 1]) return isPalindrome(str.slice(1, len - 1));
  return false;
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
