const test1 = [1, 3, 5, 6],
  val1 = 5; // ==> 2
const test2 = [1, 3, 5, 6],
  val2 = 2; // ==> 1
const test3 = [1, 3, 5, 6],
  val3 = 7; // ==> 4
const test4 = [1, 3, 5, 6],
  val4 = 0; // ==> 0

const searchInsert = (nums, target) => {
  let index = nums.length;
  if (target >= nums[0] && target <= nums[nums.length - 1]) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === target) index = i;
      if (nums[i] < target && nums[i + 1] > target) index = i + 1;
    }
  } else {
    if (target < nums[0]) index = 0;
  }

  return index;
};

console.log(searchInsert(test1, val1));
console.log(searchInsert(test2, val2));
console.log(searchInsert(test3, val3));
console.log(searchInsert(test4, val4));
