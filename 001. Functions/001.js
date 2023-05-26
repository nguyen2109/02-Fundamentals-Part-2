'use strict';
function logger() {
  console.log('Xin chào tôi là logger');
}
logger();

function calAge(birthYear) {
  return 2023 - birthYear;
}

console.log(calAge(1999));

function fruits(apple, orange) {
  console.log(apple, orange);
  const juice = `I have ${apple} apples and ${orange} oranges in my hand`;
  return juice;
}

fruits(1, 2);
const yo = fruits(5, 6);
console.log(yo);
