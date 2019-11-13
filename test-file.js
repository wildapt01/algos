const test1 = "hello",
  val1 = "ll"; // ==> 2
const test2 = "hello",
  val2 = ""; // ==> 0  test can be any string
const test3 = "aaaaaaaaa",
  val3 = "bba"; // ==> -1
const test4 = "",
  val4 = "q"; // ==> 0

const strStr = (haystack, needle) => {
  return haystack.search(needle);
};

console.log(strStr(test4, val4));
