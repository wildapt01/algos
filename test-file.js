const test1 = 1; // ==> 1
const test2 = 2; // ==> 11
const test3 = 3; // ==> 21
const test4 = 4; //==> 1211
const test5 = 5; // ==> 111221
const test10 = 10; // ==> 13211311123113112211

const countSay = n => {
  let res = "1";

  while (n > 1) {
    let temp = "";
    let cur = "";
    for (let i = 0; i < res.length; i++) {
      cur += res[i];
      if (res[i] !== res[i + 1]) {
        temp += `${cur.length}${cur[0]}`;
        cur = "";
      }
    }
    res = temp;
    n--;
  }

  return res;
};

console.log(countSay(test1));
console.log(countSay(test2));
console.log(countSay(test3));
console.log(countSay(test4));
console.log(countSay(10));
