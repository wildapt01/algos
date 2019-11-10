const test1 = [3, 2, 2, 3],
  val1 = 3; // ==> 2
const test2 = [],
  val2 = 1; // ==> 0  val2 can be any int
const test3 = [0, 1, 2, 2, 3, 0, 4, 2],
  val3 = 2; // ==> 5
const test4 = [0, 0, 0, 0],
  val4 = 0; // ==> 0
const test5 = [1, 1, 1, 1],
  val5 = 1; // ==> 0
const test6 = [1, 1, 1, 1],
  val6 = 2; // ==> 4

const remEl = (nums, val) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};

console.log(remEl(test6, val6));
