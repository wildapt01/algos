// Doors left opened
// Number of doors = number of students

const doors = (n) => ~~Math.sqrt(n);

// const doors = (num) => {
//   // Open door = 1, closed door = 0
//   // Start with all doors opened, first student arrival
//   let current = Array.from({ length: num }, (_) => 0);
//   // Looping
//   for (let i = 1; i <= num; i++) {
//     current = current.map((item, indx) => {
//       if ((indx + 1) % i === 0) {
//         return item === 0 ? 1 : 0;
//       } else {
//         return item;
//       }
//     });
//   }

//   return current.reduce((tot, item) => tot + item);
// };

console.log(doors(5));
console.log(doors(1));
console.log(doors(100000));
