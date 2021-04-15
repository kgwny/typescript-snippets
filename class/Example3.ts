// ゲッターとセッター
class Example3 {
    private firstName;
    private lastName;

    set fullName(name: string) {
        var names = name.split(' ');
        this.firstName = names[1];
        this.lastName = names[0];
    }                
    get fullName(): string { 
        return this.lastName + this.firstName + 'さん';
    }            
}              

var p: Example3;
p = new Example3();
p.fullName = '山田 太郎';      
console.log(p.fullName);
