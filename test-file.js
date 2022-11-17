const test1 = [1, 2, 3]; // ==> [1,2,4]
const test2 = [4, 3, 2, 1]; // ==> [4,3,2,2]
const test3 = [9]; // ==> [10]
const test4 = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]; // ==>[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]

const myFunction = (digits) => {
  // const newNumber = Number(digits.join("")) + 1;
  // console.log("newNumber :>> ", newNumber);
  // return `${newNumber}`.split("");
  const lastNum = digits.pop();
  console.log("lastNum :>> ", lastNum);
};

console.log(myFunction(test1));
console.log(myFunction(test2));
console.log(myFunction(test3));
console.log(myFunction(test4));
