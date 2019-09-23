const test1 = "III";
const test2 = "IV";
const test3 = "IX";
const test4 = "IX";
const test5 = "LVIII";
const test6 = "MCMXCIV";

const romToInt = str => {
  let result = 0, counter=0;
  const dict = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900
  };

  while()
  result += dict[str] ? dict[str] : 0;
  return result;
};

console.log(romToInt(""));
