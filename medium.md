## Three number sum

Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. The function should find all triplets in the array that sum up to the target sum and return a two-dimensional array of all these triplets.

The numbers in each triplet should be ordered in ascending order, and the triplets themselves should be ordered in ascending order with respect to the numbers they hold.

If no three numbers sum up to the target sum, the function should return an empty array.

- Sample input: [12, 3, 1, 2, -6, 5, -8, 6], 0
- Sample output: [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]

Approach:
Brute force ==> 3 loops, and O(n^3) time

1. Sort the input array
2. Use pointers to check if the sum of the 3 numbers is equal to target

- incrementing the left pointer ==> larger sum
- decrementing the right pointer ==> smaller sum
- For loop to iterate through the array, that is the first number for the sum
  while loop until left pointer === right pointer
- O(n^2) time O(n) space

```javascript
const threeNumSum = (arr, target) => {
  const triplets = [];
  const sorted = arr.sort((a, b) => a - b);

  for (let i = 0; i < sorted.length - 2; i++) {
    let left = i + 1;
    let right = sorted.length - 1;

    while (left < right) {
      const current = [sorted[i], sorted[left], sorted[right]];
      const currentSum = current.reduce((tot, num) => tot + num);

      if (currentSum === target) {
        triplets.push(current);
        left++;
        right--;
      } else if (currentSum < target) left++;
      else if (currentSum > target) right--;
    }
  }
  return triplets;
};
```

---

## Smallest Difference

Write a function that takes in two non-empty arrays of integers. The function should find the pair of numbers (one from the first array, one from the second array) whose absolute difference is closest to zero.

The function should return an array containing these two numbers, with the number from the first array in the first position.

Assume that there will only be one pair of numbers with the smallest difference.

- Sample input: [-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]
- Sample output: [28, 26] ==> smallest difference is 2

Approach:

- First sort the arrays.
- Then use 1 pointer per array, starting at 0.
- If the difference between each value at the pointers is 0, return this pair.
- Else, increment the pointer of the smallest number of the 2.
- Loop until reaching the end of the smallest array as they can have different
  lengths.

---

## String to Integer

Implement the function `atoi` which converts a string to an integer.

The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

If no valid conversion could be performed, a zero value is returned.

**Note**: Only the space character ' ' is considered as whitespace character.
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−2**31, 2**31 − 1]. If the numerical value is out of the range of representable values, INT_MAX (2**31 − 1) or INT_MIN (−2**31) is returned.

Examples:

- "42" ==> 42
- "-42" ==> -42
- "431 words" ==> 431
- "words 431" ==> 0
- "91283472332" ==> 2147483648

```javascript
const myAtoi = (str) => {
  const MAX = Math.pow(2, 31);
  const tempNum = parseInt(str, 10);
  let result = Math.trunc(tempNum) || 0;
  if (result > MAX - 1) result = MAX - 1;
  if (result < -MAX) result = -MAX;
  return result;
};
```

---
