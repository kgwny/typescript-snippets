import * as moment from 'moment';

// 現在時刻を取得する例
const now = moment().format(); // 2021-05-08T17:12:09+09:00
console.log(now);

// 現在日付を取得する例
const yyyymmdd = moment().format("YYYY-MM-DD"); // 2021-05-08
console.log(yyyymmdd);
