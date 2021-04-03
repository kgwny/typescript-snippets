var Member = /** @class */ (function () {
    function Member(name, age, nationality) {
        this.name = name;
        this.age = age;
        this.nationality = nationality;
    }
    Member.prototype.profile = function () {
        // ageはprivateなのでクラス内部のみアクセスできる
        return "name: " + this.name + ", age: " + this.age + ", natonality: " + this.nationality;
    };
    return Member;
}());
var hanako = new Member('Hanako', 30, 'Japan');
console.log(hanako.name);
// Taro
//console.log(member.age)
// ageはprivateなのでコンパイルエラー
console.log(hanako.profile());
// privateのageを含むメソッドなのでエラーになる
