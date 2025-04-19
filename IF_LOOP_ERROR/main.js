// let ok = false;
// let maybeOK = false;
// let maybeOK2 = true;
// if (ok) {
//     console.log("ok"); // "ok"は表示されない
// } else if (maybeOK) {
//     console.log("maybeOK..."); // "maybeOK..."は表示されない
// } else {
//     console.log("out"); // "out"が表示される
// }

// maybeOK2 = 1 === 1; // true
// maybeOK2 = 1 !== 2; // true
// maybeOK2 = 1 == 0; // false
// maybeOK2 = 1 >= 2; // false
// maybeOK2 = true && false; // false
// maybeOK2 = true || false; // true
// console.log(maybeOK2); // true

// const userInput = "";
// const userName = userInput || "User"; // "User"
// console.log(userName); // "User"

// const x = 15;
// ok = x > 10 && x < 20; // true
// ok = x === 10 || (x > 12 && userName); // true
// if (ok) {
//     console.log("OK"); // "OK"が表示される
// } else {
//     console.log("No"); // 表示されない
// }

// let username = "" || "User"; // "User"

// ok1 = !true; // false
// ok1 = !"hello"; // true
// ok1 = !0; // true
// ok1 = !!x; // true
// console.log(ok1); // false

// const hello = "Hello!2";
// {
//     //console.log(hello); // "Hello!2"はデッドゾーンエラーになる
//     const hello = "Hello!1";
//     console.log(hello);
// }

// //if (ton) ton = true;//()の中は定義　｛｝の中はどんな分でもOK

// ok3 = true; //  ok3はtrue
// ok3 = ok ? "ok" : "no"; // 三項演算子という条件演算子を使った書き方
// console.log(ok3); // "ok"が表示される

// function vegetbleColor(vegetable){
//     switch (vegetable){
//         case "tomato":
//             console.log("tomato is red.");
//             break;
//         case "pumpkin":
//             console.log("pumpkin is oernge.");
//             break;
//         case "onion":
//             console.log("onion is white.");
//             break;
//         default:
//             console.log("unknown vegetable.");
//     }
//     // if (vegetable === "tomato") {
//     // console.log("tomato is red.");
//     // }else if (vegetable === "pumpkin") {
//     //     console.log("pumpkin is oernge.");
//     // }else if (vegetable === "onion") {
//     //     console.log("onion is white.");
//     // }
// }
// vegetbleColor("tomato"); // "tomato is red."が表示される

// //while文
// let count = 100; //カウントの初期化
// while (count < 10) {
//     console.log("while: ", count); //カウントを表示
//     count += 1; //カウントを増やす
// }

// let tomato_count = 100; //カウントの初期化
// do {
//     console.log("do_while: ", tomato_count); //カウントを表示
//     tomato_count += 1; //カウントを増やす
// } while (tomato_count < 10); //do while文は必ず1回は実行される

// //let pumpkin_count = 1; //for分にそのままいられる
// for (let pumpkin_count = 1;
//      pumpkin_count < 10;
//       pumpkin_count +=1) {
//     console.log("for: ", pumpkin_count,); //カウントを表示
// };//for文はカウントを初期化、条件を指定、カウントを増やす

// const fruits = ["apple", "banana","grape", "mango", "orange"]; //配列の初期化
// for (let i = 0 ;i < fruits.length; i += 1) {
//     console.log(fruits[i]);
// }
// for (const fruit of fruits) {
//     console.log(fruit); //配列の要素を表示
// }

// const banana ={
//     name: "banana Latte",
//     size: 350,
//     isHot: true,
// };

// for (const key in banana) {
//     console.log(key); //配列のキーを表示
//     console.log(banana[key]); //配列の値を表示
//     if (key === "size") {
//         console.log("break")
//         break; //break文でループを抜ける
//     }
// }
// const banana2 ={
//     name: "banana2 Latte",
//     size: 350,
//     isHot: true,
// };

// for (const key2 in banana2) {
//     if (key2 === "size") {
//         console.log("contiune")
//         continue; //continue文でループを抜ける
//     }
//     console.log(key2); //配列のキーを表示
//     console.log(banana2[key2]); //配列の値を表示
// }

// try{
//     console.log(chocolate); // chocolateは定義されていないのでエラーになるがtry文でエラーをキャッチする
// } catch {
//     console.log("hello"); // helloは表示される
// }



// try {} catch {} finally {}// finallyは必ず実行される

// try{
//     console.log("try"); // helloは表示される
//     console.log(chocolate); // chocolateは定義されていないのでエラーになるがtry文でエラーをキャッチする
// } catch {
//     console.log("catch"); // helloは表示される
// }
// finally {
//     console.log("finally"); // finallyは必ず実行される
// }


<<<<<<< HEAD
// function logChocolate() {
//     try{
//         console.log("try"); // helloは表示される
//         return "hello"; // chocolateは定義されていないのでエラーになるがtry文でエラーをキャッチする
//     } catch {
//         console.log("catch"); // helloは表示される
//     }
//     finally {
//         console.log("必ずfinally表示される"); // finallyは必ず実行される
//         return "returnも上書きfinally"; // finallyは必ず実行される
//     }
// }
// console.log(logChocolate()); // "try"が表示される

// //throw new Error("エラーが発生しました"); // エラーを投げる

// function logChocolate2() {
//     try{
//         console.log("try"); // tryは表示されない
//         throw {message: "throw an error"}; // エラーを投げる

//     } catch (error) {
//         console.log("catch", error); // "catch"が表示される
//     }
// }
// console.log(logChocolate2()); // "try"が表示される

=======
function logChocolate() {
    try{
        console.log("try"); // helloは表示される
        return "hello"; // chocolateは定義されていないのでエラーになるがtry文でエラーをキャッチする
    } catch {
        console.log("catch"); // helloは表示される
    }
    finally {
        console.log("必ずfinally表示される"); // finallyは必ず実行される
        return "returnも上書きfinally"; // finallyは必ず実行される
    }
}
console.log(logChocolate()); // "try"が表示される
sayHi = () => {
    console.log("hello"); // helloは表示される
}   
>>>>>>> 2d31ad5614fc6f67a733fa0d1e2d59ff11822ab7

sayHi = () => {
    console.log("hello"); // helloは表示される
};

// sayHi = (name = "User", message) => `Hi ${name}! ${message}`; // テンプレートリテラルを修正
// console.log(sayHi(undefined, "hello")); // 冗長ではない

sayHi = (name, message = "I'm strong.") => `Hi my name is ${name}! ${message}`; // テンプレートリテラルを修正
console.log(sayHi("susumu")); // 冗長ではない