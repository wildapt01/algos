const myAtoi = str => {
  const MAX = Math.pow(2, 31);
  const tempNum = parseInt(str, 10);
  let result = Math.trunc(tempNum) || 0;
  if (result > MAX - 1) result = MAX - 1;
  if (result < -MAX) result = -MAX;
  return result;
};

console.log(myAtoi("  -0000007.1a773 word"));
