const input = "123.45";

const messageRecord = {
    body: 'Hello world!',
    toString() {
        return this.body;
    },
};

console.log(`入力値 ${parseInt(input)} に該当するメッセージ ${messageRecord}`);
// => 入力値123 に該当するメッセージ：Hello World!
