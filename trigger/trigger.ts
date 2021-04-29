// GASのトリガー生成

// 現在の日付を取得
const next = new Date();

// 翌日の日付に変換
next.setDate(next.getDate() + 1);

// 09:30:00に時刻を設定
next.setHours(9);
next.setMinutes(30);
next.setSeconds(0);
  
// hogeという関数を9:30に実行するトリガーを作成
ScriptApp.newTrigger('hoge').timeBased().at(next).create();
