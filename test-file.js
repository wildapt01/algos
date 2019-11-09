const test1 = ''; // true
const test2 = '()'; // true
const test3 = '()[]{}'; // true
const test4 = '(]'; // false
const test5 = '([)]'; // false
const test6 = '{[]}'; // true

const isValid = str => {
  if (!str) return true;

  const open = ['{', '(', '['];
  const close = ['}', ')', ']'];
  const stack = [];

  for (let par of str) {
    if (close.includes(par)) {
      const current = stack.pop();
      if (!current || current !== open[close.indexOf(par)]) return false;
    } else {
      stack.push(par);
    }
  }
  return !stack.length;
};

console.log(isValid(test3));
