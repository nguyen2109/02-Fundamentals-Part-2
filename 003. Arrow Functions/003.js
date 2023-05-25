function calAge(params) {
  return 2023 - params;
}

const age3 = (params) => 2050 - params;
console.log(age3(1999));

// tính năm sẽ đc nghỉ hưu

const nghiHuu = (params) => {
  const age = 2023 - params;
  const year = 65 - age;
  return year;
};
const yourBirthYear = 1999;
console.log(
  `Nếu bạn sinh năm ${yourBirthYear} thì bạn cần ${nghiHuu(
    yourBirthYear,
  )} nữa mới dc nghỉ hưu`,
);

// cách khác :

const nghiHuu2 = (birthYear, name) => {
  const age = 2023 - birthYear;
  const year = 65 - age;
  return console.log(`${name} sẽ được nghỉ hưu sau ${year} nữa`);
};

nghiHuu2(1999, 'Nguyên');
