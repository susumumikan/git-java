//レッスン１　JavaScriptの基礎
//１．letを使って入れ物である変数を作る（変えられる物）
//　〇「変数宣言」または「変数の初期化」という↓意味
// let count = 0; //変数の前にはletを付ける必要がある。count1に０を代入するという
// let count; //初期値に0を代入しない場合は、let count;と書くこともできる。初期値がundefined(未定義）になる。 
// let countを２回宣言はできない。↑はそのまま使用するとエラーになるため、letは一度だけ宣言するようにする
//変数の最後には「;」を付ける
// console.log(count); //countの現在の値がどうなっているのか調べる方法としてconsole.logを使う＝０となっている
// count = 30;  //countに30を代入するという意味 
// console.log(count);  //countの現在の値がどうなっているのか調べる方法としてconsole.logを使う=３０となっている

//２．constを使って、一定の値である定数を作る方法（変えられない物）＝基本は定数を使うようにする
// let daysInWeek = 0; //変数宣言↓letをconstに変えると定数になる。
// const daysInWeek = 7; //本来は、定数は一定の数になるものに使う
// daysInWeek= 10; //定数は変更できないのでエラーになる。

//３．変数や定数の名前のルールについて
// let tomatoCount; //「―」「*」「%」「/」など使うことができないtomato-Countは使える
// let $tomato_Count; //＄と_は使えるが、数字から始めることはできない
// let _tomatoCount; //＄と_は使えるが、数字から始めることはできない
// let 1tomatoCount; //数字から始めることはできない
// let console; //予約語は使えない
// let トマトカウント; //日本語も使えるが、推奨されない
// let tomatoCount1; //大文字と使うことをキャメルケースと言う
// let tomato_count; //スネークケースも使えるが、キャメルケースが推奨される

//４．＋やーなどの算術演算子について
// let additionResult = 1 + 2; //算術演算子という計算をするための記号を使うことができる。
// +, - , * , / , %(余り), **(累乗) ,1+2*3（掛け算から先）などの記号を使うことができる。

//５．　+=や++などの省略記号、演算子について
// let result = 0; //変数の宣言（初期化）
// result = result + 1; //resultはresultに１を足すという意味
// result += 1; //+=は+=1と同じ意味のため、↑と同じ結果になる（-*/%なども同じ）
// result++; //＋１の時だけ特別な書き方++は+1と同じ意味
// ++result; //前に++時と、後ろに++時の違いは、後ろの方が値を返す前の値、前の方が値を返す後の値になる。
// console.log(result); //resultの現在の値がどうなっているのか調べる方法としてconsole.logを使う=３となっている

//６．「データの型」と「動的型付け」について
// let number = 10; //数値型の変数の宣言
// number = -4; //負の数も入る（intjeger型）
// number = 0.4; //小数点も入る(float型）
// let string = "Hello" + "World"; //文字列型の変数の宣言(string型）
// console.log(string);
// javascriptは動かすときに型を決める方法を動的型付け言語である
// c言語はコンパイル時(コードの実行前）に型を決める方法を静的型付け言語である。


//７．３つの文字列の書き方
// const uerName = 'Susumu'; //シングルクォーテーションで囲む
// const userName = "Susumu"; //ダブルクォーテーションで囲む
// const userName = `Susumu`; //バッククォーテーションで囲む（テンプレートリテラル）
// string = 'Hello' + userName + '!';  //文字列の結合
// string = `Hello ${userName}!`; //テンプレートリテラルを使った文字列の結合
// console.log(string); //文字列の結合を表示

//８．どうやって型の変換が行われているか？
// let number = 0;
// console.log(number); //数値型の変数の宣言
// number = "10"; //文字列型の変数の宣言
// console.log(number); //文字列型の変数の宣言
// number = 10 + "10"; //暗黙的にint型からstring型に変換される
// console.log(number); //文字列型の変数の宣言（１０１０）
// number = 10 - "10"; //暗黙的にstring型からint型に変換される
// console.log(number); //数値型の変数の宣言（０）
// number = "hello" * 10; //暗黙的にstring型からint型に変換される
// console.log(number); //数値型の変数の宣言（NaN）

//９．型の変換を明示的に行う方法
// const userInput = "10.9"; //ユーザーからの入力を想定
// let calcResult;
// calcResult = Number(userInput) + 10; //Number関数を使って文字列を数値に変換
// console.log(calcResult);
// calcResult = parseInt(userInput) + 10; //Number関数を使って文字列を数値に変換
// console.log(calcResult);
// calcResult = parseFloat(userInput) + 10; //Number関数を使って文字列を数値に変換
// console.log(calcResult);
// calcResult = +userInput + 10; //Number関数を使って文字列を数値に変換
// console.log(calcResult);
// const tenNumber = 10; //数値型の変数の宣言
// calcResult = "10" + String(tenNumber); //文字列型の変数の宣言
// calcResult = "10" +tenNumber.toString(); //文字列型の変数の宣言
// console.log(calcResult); //文字列型の変数の宣言（1010）

//１０．真偽値の型について
// let boolean = true; //真偽値
// boolean = false; //真偽値
// boolean = 1; //真偽値
// boolean = 0; //真偽値


//１１．配列の宣言と初期化
// let array = ["apple", "banana", "grape"]; //配列の宣言と初期化
// array = [1, 2, 3, 4, 5]; //配列の宣言
// array = [1, "apple", true, null]; //中にはどんな型でも入る
// array[0] = 10; //配列の値を変更
// array = ["apple", "banana", "grape"]; //配列の値を変更
// console.log(array[0]); //配列の値を表示一番最初の数値が１ではなく０になるため、appleが表示される
// array = [];
// array.push("apple");
// array.push("banana");
// array.push("grape");
// console.log(array);

//１２．もっとも重要な型、オブジェクトの使い、まとまったデータを作る方法
// const coffee = {　　        //{};がオブジェクトを作るための記号
//   name: "Chocolate Mocha", //kyey-value形式でデータを作っていく
//   price: 100,           　　//またの名前でプロパティとも言う
//   size: "M",          　　　//key-valueの間には「:」を入れる
//   isHot: true,       　　　 //サイズプロパティは、オブジェクトの中にあるデータのサイズ
//   toppings: ["chocolate", "whipped cream"],　//配列の中にデータを入れることもできる
//   nutrition: {                       // オブジェクトの中にオブジェクトを入れることもできる
//     calories: 450,
//     sugars: 50,
//   },
// };
// console.log(coffee.name); //オブジェクトのプロパティにアクセス
// coffee.isHot = false; //オブジェクトのプロパティを変更
// console.log(coffee.isHot); //オブジェクトのプロパティにアクセス
// coffee.barista = "Susumu"; //オブジェクトのプロパティを追加
// console.log(coffee.barista); //オブジェクトのプロパティにアクセス

//１３．nullとundefinedの違いについて
// let useInfo = null; //nullは値がないことを示す
// console.log(userInfo); //nullは値がないことを示す//undefinedは値がないことを示す。２種類ある
// userInfo = undefined; //undefinedは値がerrorであることを示す。基本は何もない時はnullを使う
// console.log(userInfo); //undefinedは値がerrorであることを示す
// //undefinedは変数が宣言されているが値が設定されていないことを示す

//１３．typeof演算子を使って、変数の型を調べる方法
// let useInfo = null
// useInfo = typeof 3 //numberで返してくれる（型を調べることができる）
// useInfo = typeof -5 //numberで返してくれる（型を調べることができる）
// useInfo = typeof 3.2 //numberで返してくれる（型を調べることができる）
// useInfo = typeof NaN //numberで返してくれる（型を調べることができる）
// useInfo = typeof true //booleanで返してくれる（型を調べることができる）
// useInfo = typeof false //booleanで返してくれる（型を調べることができる）
// useInfo = typeof "Hello" //stringで返してくれる（型を調べることができる）
// useInfo = typeof {name: "susumu"} //objectで返してくれる（型を調べることができる）
// useInfo = typeof [1 ,2 ,3] //なんと配列もobjectで返してくれる（型を調べることができる）
// useInfo = typeof undefined //undefinedで返してくれる（特別な型を調べることができる）
// useInfo = typeof null //objectで返してくれる（nullは厳密には何もないobjectを表す）
// console.log(useInfo)


//１４．関数を使い、何度も呼び出すことができるコードのかたまりを作る方法
//　//関数には呼ぶ出すコマンド[function]と最初にいれる
// function add(){}  これで一つの関数となる。（）条件を　ちなみに;は不要｛｝block分と言う
//こういう形を関数宣言という。
// function add() { //fanctionとaddの間にはスペースが必要
//     console.log(1 + 1) //addの計算ができる　これだけでは、表示されない関数の呼び出しが必要   
// }
// //関数の呼び出し
// add(); //これで呼び出せる。大切なことはなんと何度でも呼び出せる
// add();
// add();
// add(); //何度も呼び出せるコードよ塊が関数である

//１５．「パラメータ」と「引数」
// function add(nam1, nam2) { //（）の中に追加の情報を書く受け口がある。受け口（パラメータ）（仮引数）は「,」で区切る
//     console.log(nam1 + nam2) //受け口の情報を入れることができる。情報は関数の呼び出しに入れる   
// }
// //関数の呼び出し
// add(1 ,1); //addのパラメータ値を変更することで、関数の外から、いくつもの計算ができるようになる
// add(3 ,4); //こっちの値の事を「引数」という
// add(5 ,10); //パラメータに入れることで汎用性があがる。

//１６．return文を使って、値を返す関数を作成する方法
// function add(nam1, nam2) { //
//  //関数の中では、console.log()呼び出しをせず
//     return nam1 + nam2; //returnで返す時は、;が必要   
//     //returnの後には何も実行されなくなるconsole.log("Hello")と書いても実行されなくなる強制的に呼び出し元に帰るconst returnedValue = add(2, 3);に行ってしまう
//     //retuerのみだけを書くとundefinedが帰る
// }
// //関数の呼び出し
// // add(2 ,3); //←ここで５という数を受け取りたいときにreturn文を使用する。書き方を変える
// const returnedValue = add(2, 3); //returnでaddの関数がかえって来ている。ここで出る数値５は「戻り値」という
// console.log(returnedValue);

//１７．関数の位置は戦闘に巻き上げられる
//関数の呼び出しをreturnの前に持ってきても呼び出せてしまう
// const returnedValue = add(2, 3); 
// console.log(returnedValue);
// function add(nam1, nam2) { //関数宣言は、JCエンジンにより、実行前にすべて一番上に巻き上げられてから
//     return nam1 + nam2; //実行するため、↑console.logがあっても呼び出せてしまう
// }

// //１８．変数を参照できる範囲であるscopeはこうなっている
// //scopeとは変数の参照できる範囲の事をいう。
// //↓valueのscopeはfunctionの関数内のみ　特定の場所からしか参照できないものをlocal変数という
// //↓newvalueのscopeはこのjsの全ての範囲（globalscope)という変数の事をglobal変数という
// const newValue = "Hello" //関数の外から関数の中にはアクセスはできる
// function add(nam1, nam2) { //関数宣言の中に、変数や定数は定義ができる。
//     console.log(newValue); //関数の外から定数や変数も表示が出る。
//     const value = nam1 + nam2;
//     console.log(value)
//     return value; //↑の定数valueをreturnで戻り値に渡してあげる。
// }
// //console.log(Value); //関数の中で定義した変数や定数には関数の外からはアクセスできない
// const Value = add(2, 3); 


//CTRL + s で保存
//CTRL + W で閉じる
//CTRL + z で元に戻す
//CTRL + shift + z でやり直す
//CTRL + c でコピー
//CTRL + v で貼り付け
//CTRL + f で検索
//CTRL + x で切り取り
//CTRL + a で全選択
//shift + alt + d で行を複製
//ctrl + d で行を複製



//１８．console.logでデバッグする方法
const value = "hello"; //①ここではまずはglobal定数としてvalueの中にhelloが入ってスタート
console.log(value); //helloが入っている
function add(num1, num2){ //巻き上げられる　③const value1のadd(2, 3)が入る
    console.log(num1 , num2); //④addに２と３が入っている
    const value = num1 + num2; //⑤value1の中身をlocal変数の力でnum1+num2が足される
    console.log(value); //５が出力
    return value; // ⑥add中身がadd(5)となっている
}
const value1 = add(2, 3); //②ここで初めて巻き上げられたadd関数を使う宣言になる。num1とnum2に２と３を渡してfunction addに渡す
const value2 = add(5, 6); //⑦num1とnum2に５と６を渡してfunction addに渡す
console.log(value1); //イメージ的にadd(5)をvalue1（object)の中に入れているから、console.logで５が表示
console.log(value2);
console.log(value); //ここではadd関数を使う宣言をしていないので、grobal定数のhelloが表示される。
add(10, 6); //反対にいうと、これだけadd（）の中に入ることができてしまう。value1などを使ってないので関数外の使用はできないけど
//簡単にいうと、add()にアクセスしないと巻き上げられてしまった関数は使用できない。

