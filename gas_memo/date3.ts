// 文字列 -> 日付 -> 文字列
function myFunction() {

  // 文字列 -> 日付
  const targetDate = new Date("2020-02-13");

  // 日付 -> 文字列
  const strDate = Utilities.formatDate(targetDate, "JST", "yyyy-MM-dd");
  Logger.log("strDate = " + strDate);

}
