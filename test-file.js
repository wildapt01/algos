const myAtoi = str => {
  // let result = 0;

  const tempStr = str.replace(/\s/gi, "");
  const tempNum = parseInt(tempStr, 10);
  const startStr = tempStr.substring(0, 2);

  console.log(startStr);
  //Check if tempStr is NaN
  if (!tempStr || !tempNum) return 0;

  //Check for Infinity or -Infinity
  // if (tempNum > Infinity) {
  //   result = Number.MAX_VALUE;
  // } else if (tempNum < -Infinity) {
  //   result = Number.MIN_VALUE;
  // }

  return tempNum;
};

console.log(myAtoi("  -a234 word zHello AH!"));
