// declare module "*.txt";
// import hoge_txt from "test.txt";
// declare var hoge_txt: string;

let hoge_txt = "start_date >= \"@fromDate\" and end_date < \"@toDate\"";

// Utilsクラス
export default class Utils {
    static replaceDate(fromDate: string, toDate: string) {
        const result = hoge_txt
            .replace(/\@fromDate/g, fromDate)
            .replace(/\@toDate/g, toDate);
        return result;
    }
    static replace(fromDate: string, toDate: string, hoge: string) {
        const result = hoge
            .replace(/\@fromDate/g, fromDate)
            .replace(/\@toDate/g, toDate);
        return result;
    }
}

// let text0 = Utils.replaceDate('2021-03-31', '2021-04-01')
// console.log(text0);

// let text1 = Utils.replace('2021-04-01', '2021-04-02', hoge_txt)
// console.log(text1);

// let text2 = Utils.replace('2021-04-23', '2021-04-24', hoge_txt)
// console.log(text2);

// let text3 = Utils.replace('2021-04-29', '2021-04-30', hoge_txt)
// console.log(text3);
