// 今日の日付を取得して、文字列として扱う
function myFunction() {

  let today = new Date();
  Logger.log(today);

  // yyyy-MM-dd形式の文字列へ変換する
  today = Utilities.formatDate(today, "JST", "yyyy-MM-dd");
  Logger.log(today);
}
