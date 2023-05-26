function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    const tipsMoney = bill * (15 / 100);
    return tipsMoney;
  } else {
    const tipsMoney = bill * (20 / 100);
    return tipsMoney;
  }
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];

const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tipMoney = calcTip(bills[i]);
  tips.push(tipMoney);
}

for (let z = 0; z < bills.length; z++) {
  const totalMoney = bills[z] + tips[z];
  totals.push(totalMoney);
}

function calcAverage(arr) {
  let sum = 0;
  for (let x = 0; x < arr.length; x++) {
    sum = arr[x] + sum;
  }
  const aVerage = sum / arr.length;
  return aVerage;
}

console.log(calcAverage(totals));
