const test1 = [1, 2, 3]; // ==> [1,2,4]
const test2 = [4, 3, 2, 1]; // ==> [4,3,2,2]
const test3 = [9]; // ==> [10]
const test4 = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]; // ==>[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]
const test5 = [9, 9, 9, 9]; // => [1,0,0,0,0]
const test6 = [2, 9, 9, 9]; // => [3,0,0,0]

const myFunction = (digits) => {
  let i = digits.length - 1;
  let val = 0;
  let carry = 1;
  while (i >= 0 && carry) {
    val = digits[i] + carry;
    carry = Math.floor(val / 10);
    digits[i] = val % 10;
    i--;
  }
  if (carry) digits.unshift(carry);
  return digits;
};

console.log(myFunction(test1));
console.log(myFunction(test2));
console.log(myFunction(test3));
console.log(myFunction(test4));
console.log(myFunction(test5));
console.log(myFunction(test6));
