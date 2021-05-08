// オブジェクトの結合

interface KeyValue {
    key: string;
    value: string;
}

interface KeyValueInfo {
    [infoName: string]: KeyValue;
}

const info1: KeyValueInfo = {
    hoge: {
        key: "aaa",
        value: "bbb",
    },
    fuga: {
        key: "ccc",
        value: "ddd",
    },
}

const info2: KeyValueInfo = {
    piyo: {
        key: "eee",
        value: "fff"
    }
}

console.log("info1");
console.log(info1);
console.log("info2");
console.log(info2);

//const infos = Object.assign(info1, info2);
const infos = {...info1, ...info2}
console.log("infos");
console.log(infos);

console.log("infos - loop");
Object.keys(infos).forEach(function (infoName) {
    console.log(infos[infoName]);
});
