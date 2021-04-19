const input1 = "123.45";

const messageRecord = {
    body: 'Hello world!',
    toString() {
        return this.body;
    },
};

console.log(`入力値 ${parseInt(input1)} に該当するメッセージ: ${messageRecord}`);

const input2 = 123;
console.log('入力値 %d に該当するメッセージ：%s', input2, messageRecord);
