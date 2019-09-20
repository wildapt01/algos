const test1 = ["flower", "flow", "flight"]; // ==> "fl"
const test2 = ["dog", "racecar", "car"]; // ==> ""

const funct = strs => {
  let result = "";
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

console.log("test1: ", funct(test1));
console.log("test2: ", funct(test2));
