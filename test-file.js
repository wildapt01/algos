const test1 = "Hello World"; // ==> 5
const test2 = "   fly me   to   the moon  "; // ==> 4
const test3 = "luffy is still    joyboy"; // ==> 6

const lengthOfLastWord = (str) => {
  const lastWord = str.trim().split(" ").pop();
  return lastWord.length;
};

console.log(lengthOfLastWord(test1));
console.log(lengthOfLastWord(test2));
console.log(lengthOfLastWord(test3));
