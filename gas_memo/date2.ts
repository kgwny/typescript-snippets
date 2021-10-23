// Date型の比較
function myFunction() {
  let date1 = new Date('2020-10-22');
  let date2 = new Date('2020-10-21');

  Logger.log(date1 >  date2); // true
  Logger.log(date1 >= date2); // true
  Logger.log(date1 <  date2); // false
  Logger.log(date1 <= date2); // false

  let date3 = new Date('2021-10-23');
  let date4 = new Date('2021-10-23');

  Logger.log(date3 >  date4); // false
  Logger.log(date3 >= date4); // true
  Logger.log(date3 <  date4); // false
  Logger.log(date3 <= date4); // true
  Logger.log(date3 == date4); // false
}
