const nguyenObj = ['Nguyên', 'student', 1999, 21, '0559595165'];

// console.log(nguyenObj.length);
// for (let i = 0; i < nguyenObj.length; i++) {
//   console.log(nguyenObj[i], typeof nguyenObj[i]);
// }

// const years = [1999, 2000, 2004, 1992];
// const age = [];

// for (let i = 0; i < years.length; i++) {
//   age.push(2023 - years[i]);
// }
// console.log(age);

//Continue loop :

// for (let i = 0; i < nguyenObj.length; i++) {
//   if (typeof nguyenObj[i] !== 'string') {
//     console.log(nguyenObj[i] + ' Không phải string');
//     continue;
//   }
//   console.log(typeof nguyenObj[i]);
// }

// for (let i = 0; i < nguyenObj.length; i++) {
//   if (typeof nguyenObj[i] !== 'number') {
//     console.log(nguyenObj[i] + ' Không phải number');
//     continue;
//   }
//   console.log(typeof nguyenObj[i]);
// }

for (let i = 0; i < nguyenObj.length; i++) {
  if (typeof nguyenObj[i] !== 'string') {
    console.log(nguyenObj[i] + ' Không phải number');
    break;
  }
  console.log(typeof nguyenObj[i]);
}
