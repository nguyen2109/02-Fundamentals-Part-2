//Trở lại với hai đội thể dục dụng cụ Dolphins và Koalas!
// Có một bộ môn thể dục dụng cụ mới hoạt động khác hẳn.
// Mỗi đội thi đấu 3 lượt, sau đó tính điểm trung bình của 3 lượt (tức là mỗi đội tính 1 điểm trung bình).
// Một đội chỉ thắng nếu có ít nhất gấp đôi số điểm trung bình của đội kia. Nếu không, không có đội chiến thắng!

const scoreDolphins = 88 + 54 + 41;
const scoreKoalas = 23 + 34 + 27;

const calcAverage = (scores) => {
  return scores / 3;
};

console.log(calcAverage(scoreDolphins));
console.log(calcAverage(scoreKoalas));

const checkWinner = function (avgDolhins, avgKoalas) {
  if (avgDolhins >= 2 * avgKoalas) {
    console.log(
      `Dolphins win (${calcAverage(scoreDolphins)} vs ${calcAverage(
        scoreKoalas,
      )})`,
    );
  } else if (avgKoalas >= 2 * avgDolhins) {
    console.log(
      `Koalas win (${calcAverage(scoreKoalas)} vs ${calcAverage(
        scoreDolphins,
      )})`,
    );
  } else {
    console.log('No team wins 🥲 !');
  }
};

checkWinner(calcAverage(scoreDolphins), calcAverage(scoreKoalas));
//DATA 1 : Koalas win (56 vs 46)
//DATA 2 : Dolphins win (61 vs 28)
