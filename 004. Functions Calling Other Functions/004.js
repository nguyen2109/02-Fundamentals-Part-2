function catMiengTraiCay(fruit) {
  return fruit * 4; // cắt trái cây thành 4 miếng
}

function diaHoaQua(apple, orange) {
  const catApple = catMiengTraiCay(apple); // cắt apple làm 4 miếng
  const catOrange = catMiengTraiCay(orange); // cắt orange làm 4 miếng
  return console.log(
    `Trên bàn có đĩa hoa quả bao gồm ${catApple} miếng táo và ${catOrange} miếng cam`,
  );
}
diaHoaQua(3, 4);
