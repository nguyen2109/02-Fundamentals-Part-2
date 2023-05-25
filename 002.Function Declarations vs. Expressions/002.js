// Khai báo hàm Function Declarations
function calAge(params) {
  return 2023 - params;
}
console.log(calAge(1999));

// Biểu thức hàm Expressions :
const age2 = function calAge(params) {
  return 2023 - params;
};
console.log(age2(1999));
