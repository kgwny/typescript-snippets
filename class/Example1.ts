/**
 * ドキュメンテーションコメント。
 */
class Example1 {
    // フィールド
    /** 名前 */
    private readonly _name: string;
    /** 年齢 */
    private _age: number;

    // コンストラクタ
    public constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    // アクセサ
    public get name(): string { return this._name; }
    public get age(): number { return this._age; }
    public set age(age: number) { this._age = age; }

    // メソッド
    public update(): void {
    }

    // 静的フィールド
    public static readonly __Foo = 999;
    private static __bar = 0;

    // 静的アクセサ
    public static get bar(): number { return Hoge.__bar; }
    public static set bar(bar: number) { Hoge.__bar = bar; }

    // 静的メソッド
    public static init(): void {
    }
}
