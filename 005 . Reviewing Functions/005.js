const calAge = function (birthYear) {
  return 2023 - birthYear;
};

const nghiHuu = function (birthYear, name) {
  const age = calAge(birthYear);
  const namNghiHuu = 65 - age;
  if (namNghiHuu > 0) {
    console.log(
      `Phải đợi ${namNghiHuu} năm mới thì ${name} mới được phép nghỉ hưu `,
    );
    return namNghiHuu;
  } else {
    console.log(`${name} đã được nghỉ hưu rồi`);
    return -1;
  }
};
nghiHuu(1944, 'Nguyên');
