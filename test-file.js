const palindromeInt = int => {
  let rem = 0;
  let final = 0;
  const temp = int;

  while (int > 0) {
    rem = int % 10;
    int = Math.trunc(int / 10);
    final = final * 10 + rem;
    console.log("===============================");
    console.log("rem: ", rem, "\nint: ", int, "\nfinal: ", final);
  }

  return temp === final;
};

console.log("==>", palindromeInt(123321));
