let dice = Math.trunc(Math.random() * 7);

while (dice !== 6) {
  console.log(dice);
  dice = Math.trunc(Math.random() * 7);
  if (dice === 6) {
    console.log('Đã thấy dice = 6 ');
  }
}
