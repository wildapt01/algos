//******************************************************************* */
// 3 number sum
/*
Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. The function should find all triplets in the array that sum up to the target sum and return a two-dimensional array of all these triplets. The numbers in each triplet should be ordered in ascending order, and the triplets themselves should be ordered in ascending order with respect to the numbers they hold. If no three numbers sum up to the target sum, the function should return an empty array.

Sample input: [12, 3, 1, 2, -6, 5, -8, 6], 0
Sample output: [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
*/

// Approach:
// Brute force ==> 3 loops, and O(n^3) time
// 1- Sort the input array
// 2- use pointers to check if the sum of the 3 numbers is equal to target
// incrementing the left pointer ==> larger sum
// decrementing the right pointer ==> smaller sum
// For loop to iterate through the array, that is the first number for the sum
// while loop until left pointer === right pointer
// O(n^2) time O(n) space

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

//******************************************************************* */
// Smallest Difference

// Write a function that takes in two non-empty arrays of integers. The function should find the pair of numbers (one from the first array, one from the second array) whose absolute difference is closest to zero. The function should return an array containing these two numbers, with the number from the first array in the first position. Assume that there will only be one pair of numbers with the smallest difference.

// Sample input: [-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]
// Sample output: [28, 26] ==> smallest difference is 2

// Approach:
// First sort the arrays.
// Then use 1 pointer per array, starting at 0.
