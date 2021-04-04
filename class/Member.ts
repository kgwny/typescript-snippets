class Member {
  // publicはアクセスの制約がない。省略できる。
  public name: string
  // クラス内部からのみアクセスできる
  private age: number
  // 継承した子クラスからもアクセスできる
  protected nationality: string

  constructor(name: string, age: number, nationality: string) {
    this.name = name
    this.age = age
    this.nationality = nationality
  }

  profile(): string {
    // ageはprivateなのでクラス内部のみアクセスできる
    return `name: ${this.name}, age: ${this.age}, natonality: ${this.nationality}`
  }
}

let hanako = new Member('Hanako', 30, 'Japan')

console.log(hanako.name)
// Taro
//console.log(member.age)
// ageはprivateなのでコンパイルエラー
console.log(hanako.profile())
// privateのageを含むメソッドなのでエラーになる
