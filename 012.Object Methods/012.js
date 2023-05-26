const nguyenObj = {
  name: 'Nguyên',
  job: 'student',
  year: 1999,
  age: 21,
  phone: '0559595165',
  country: 'VN',
  friends: ['Dat', 'minh', 'hau'],
  BLX: true,
  //   calage: function () {
  //     return 2023 - nguyenObj.year;
  //   },
  calage: function () {
    return (nguyenObj.age = 2023 - nguyenObj.year);
  },
  getSumary: function () {
    return `${this.name} hiện nay đã ${this.calage()} tuổi , ${
      this.job
    } và anh ấy ${this.BLX ? 'có BLX' : 'không có BLX'}`;
  },
};

console.log(nguyenObj.calage());
console.log(nguyenObj.age);

// // THỬ THÁCH
if (nguyenObj.BLX) {
  console.log(`${nguyenObj.name}  - ${nguyenObj.age} tuổi và anh ấy có BLX`);
} else {
  console.log(
    `${nguyenObj.name}  - ${nguyenObj.age} tuổi và anh ấy không có BLX`,
  );
}

// LỜI GIẢI CHO THỬ THÁCH :
console.log(nguyenObj.getSumary());
