var Person = /** @class */ (function () {
    // コンストラクタの引数に型宣言
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    // クラスのメソッドに型宣言
    Person.prototype.profile = function () {
        return "name: " + this.name + ", age: " + this.age;
    };
    return Person;
}());
;
var taro = new Person('Taro', 30);
console.log(taro.profile());
// name: Taro, age: 30
