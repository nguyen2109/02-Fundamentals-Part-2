const markObj = {
  fullname: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};
const johnObj = {
  fullname: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};
//John's BMI (28.3) is higher than Mark's (23.9)!"
markObj.calcBMI() > johnObj.calcBMI()
  ? console.log(
      `${markObj.fullname} BMI (${markObj.calcBMI()}) is higher than ${
        johnObj.fullname
      } (${johnObj.calcBMI()})`,
    )
  : console.log(
      `${johnObj.fullname} BMI (${johnObj.calcBMI()}) is higher than ${
        markObj.fullname
      } (${markObj.calcBMI()})`,
    );
