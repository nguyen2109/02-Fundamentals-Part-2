function percentageOfWorld1(population) {
  const result = (population / 7900) * 100;
  return result;
}

console.log(
  `Trung Quốc có 1441 triệu người vậy nên nó chiến ${percentageOfWorld1(
    1441,
  )} phần trăm dân số thế giới`,
);

const percentageOfWorld2 = function (population) {
  const result = (population / 7900) * 100;
  return result;
};

console.log(
  `Trung Quốc có 1441 triệu người vậy nên nó chiến ${percentageOfWorld2(
    1441,
  )} phần trăm dân số thế giới`,
);
