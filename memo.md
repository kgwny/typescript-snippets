## 環境構築
TypeScriptとts-nodeをインストールする.
```
$ npm install -g typescript ts-node
```

## TypeScriptの実行
ts-nodeにより、TypeScriptを実行することができる.
```
$ ts-node something.ts
```
体感的には動作が遅く感じる.

## トランスパイル
トランスパイルを実行することにより、TypeScriptからJavaScriptへ変換することができる.
```
$ tsc something.ts
```
コマンドを実行すると、something.tsを基にして、something.jsが生成される.

## JavaScriptの実行
```
$ osascript -l JavaScript something.js
```
TypeScriptからJavaScriptへトランスパイルしたあとに動作させるほうが格段に速い.
