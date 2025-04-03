// let count = 0;
// console.log(count);
// count = 30;
// console.log(count);
// let newCount = 0;
// const daysInWeek = 7;
// let tomatoCount;
// let $tomato_Count; //＄と_は使えるが、数字から始めることはできない
// let _tomatoCount; //＄と_は使えるが、数字から始めることはできない
// let _1tomatoCount; //数字から始めることはできない
// let console; //予約語は使えない
// let トマトカウント; //日本語も使えるが、推奨されない
// let tomatoCount1; //大文字と使うことをキャメルケースと言う
// let tomato_count; //スネークケースも使えるが、キャメルケースが推奨される

// let additionResult = 1 + 2;
// let result = 0; //結果は0
// result = result + 1; //結果は同じ
// result += 1; //結果は同じ
// console.log(result++); //結果は同じ
// ++result; //結果は同じ
// let string = "Hello" + "World";
// console.log(string);

// const userInput = "10.9"; //ユーザーからの入力を想定
// let calcResult;
// calcResult = Number(userInput) + 10; //Number関数を使って文字列を数値に変換
// console.log(calcResult);
// calcResult = parseInt(userInput) + 10; //Number関数を使って文字列を数値に変換
// console.log(calcResult);
// calcResult = parseFloat(userInput) + 10; //Number関数を使って文字列を数値に変換
// console.log(calcResult);

// let boolean = true; //真偽値
// // boolean = false; //真偽値
// // boolean = 1; //真偽値
// // boolean = 0; //真偽値

// let array = [1, 2, 3, 4, 5]; //配列の宣言
// array[0] = 10; //配列の値を変更
// array = ["apple", "banana", "orange"]; //配列の値を変更
// console.log(array[0]); //配列の値を表示
// array = [];
// array.push("apple");
// array.push("banana");
// array.push("grape");
// console.log(array);

// //オブジェクトの宣言
// const coffee = {
//   name: "Chocolate Mocha",
//   price: 100,
//   size: "M",
//   isHot: true,
//   toppings: ["chocolate", "whipped cream"],
//   order: function () {
//     console.log("Order: " + this.name + " " + this.size);
//   },
// };
// console.log(coffee.name); //オブジェクトのプロパティにアクセス
// coffee.isHot = false; //オブジェクトのプロパティを変更
// console.log(coffee.isHot); //オブジェクトのプロパティにアクセス
// coffee.barista = "Susumu"; //オブジェクトのプロパティを追加
// console.log(coffee.barista); //オブジェクトのプロパティにアクセス

// //nullとundefinedの違い
// let useInfo = null; //nullは値がないことを示す
// console.log(userInfo); //nullは値がないことを示す
// userInfo = undefined; //undefinedは値がerrorであることを示す
// console.log(userInfo); //undefinedは値がerrorであることを示す
// //undefinedは変数が宣言されているが値が設定されていないことを示す



//関数の宣言
const value = "hello"
function add(a, b) { //関数の名前はadd、引数はaとb
    const value = a + b; //aとbを足した値をvalueに代入
    //関数の引数を受け取る
    //console.log(value); //関数の引数を表示
    //hello();
    return value; //戻り値を返す 
    //return文の後に書いても無視されてしまう。
    console.log("hello"); //return文の後に書いても無視されてしまう。    
}
//関数の呼び出し

const returnedVaoue = add(5, 5); //関数の戻り値を受け取る
console.log(returnedVaoue); //関数の戻り値を表示
console.log(value); //関数の戻り値を表示


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

