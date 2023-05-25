// Steven vẫn đang xây dựng máy tính tiền boa của mình, sử dụng các quy tắc giống như trước đây:
// Tiền boa 15% cho hóa đơn nếu giá trị hóa đơn nằm trong khoảng từ 50 đến 300
// và nếu giá trị khác, tiền boa là 20%

function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    const tipsMoney = bill * (15 / 100);
    return tipsMoney;
  } else {
    const tipsMoney = bill * (20 / 100);
    return tipsMoney;
  }
}

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(total);
