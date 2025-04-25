//１．[if文とelse文とelse if文]を使ってコードの流れを分岐させる方法
// if () {} //if文の基本的な書き方、;は不要
// ()コードの流れの条件式を書くtrueもしくはfalseの条件式を入れる
// {//     //}条件式がtrueの時に実行されるコードを書く{}の中に書く
// if (true) {
//     console.log("ok"); // okが表示される
// }
// //変数としてokを定義して、ok＝trueとする事もできる。↓はok変数は、中身がtrueとなっている。
// let ok = true; //変数okを定義する。okはtrue
// if (ok) {
//     console.log("ok"); // okが表示される
// }
// let ok1 = false; //変数ok1を定義する。ok1はfalse
// if (ok1) {
//     console.log("ok"); // okは表示されない
// }
// let ok = false;
// let maybeOK = false;
// if (ok) {
//     console.log("ok"); // "ok"は表示されない
// } else if (maybeOK) {
//     console.log("maybeOK..."); // "maybeOK..."は表示されない
// } else {
//     console.log("out"); // "out"が表示される
// }

//２．「===」や「!==」を使って、同じかどうか確かめる方法
// OK = 1 === 1; // 同じならtrueを返す。型も考慮する(同値演算子)
// OK = 1 === "1"; //型が違うため、falseを返えしてくれる。（同値演算子）です。普段よく使う。
// OK = 1 !== 2; // 同じでなければtrueを返す。型も考慮する
// OK = 1 == 1; // 同じならtrueを返す。しかし、型は考慮しない（等価演算子）
// OK = 1 == "1"; //型が違うのに、trueを返えしてしまうのが（等価演算子）です。普段は、あまり使わない
// const coffee1 = {name: "coffee"};
// const coffee2 = {name: "coffee"};
// const coffee3 = coffee1; //coffee1の中身をcoffee3に入れる
// ok = coffee1 === coffee2; //同じ名前のオブジェクトでも、違うオブジェクトとして扱われるため、falseが返される(objectの参照元が違うため)
// ok = coffee1 === coffee3; //同じオブジェクトを参照しているため、trueが返される 
// console.log(ok); 

//３． 「＞」などの比較演算子を使って大証を比較する方法
// OK = 1 > 2; // false(1は2より大きくない)日本語では日本語では 「より大きい」
// OK = 1 < 2; // true (1は2より小さい)日本語では「未満」
// OK = 1 >= 2; // false(1は2より大きくない)
// OK = 1 <= 2; // true(1は2より小さい)
// ok = "   a" < "b"; // true(文字列の比較は、Unicodeの値で比較される)(文字順みないなものもある)
// OK = 1 >= 1; // true(等しい場合もtrue)日本語では「以上」
// OK = 1 <= 1; // true(等しい場合もtrue)日本語では「以下」

//４．trueとfalseをとして扱われる[truthy]と[falsey]はこうなっている
//let ok = "hello"; //という文字列のときはtrueとなりOKとなる（helloはtrueとして扱われている）
//let ok = ""; //という文字列のときはfalseとなりOKとなる（""はfalseとして扱われている）
//let ok = 100; //という数字のときはtrueとなりOKとなる（100はtrueとして扱われている）
//let ok = 0; //という数字のときはfalseとなりOKとなる（0はfalseとして扱われている）
//let ok = -1; //という数字のときはtrueとなりOKとなる（-1はtrueとして扱われている）
//jsでは、treuとして扱われるものを[truthy]、falseとして扱われるものを[falsey]と呼ぶ。
//urlはmdndocsで調べる
// if (ok) {
//     console.log("ok"); // 
// }  else {
//     console.log("No"); // "out"が表示される
// }

//５．論理演算子「&&」や「||」を使って、条件を組み合わせる方法
// OK = true && false; // &&アンド演算子(論理積、ａｎｄ演算子）（両方がtrueのときだけtrue）これはfalseとなる
// OK = true || false; // ||オア演算子(論理和、or演算子）（どちらかがtrueのときtrue）これはtrueとなる
// OK = "Hello" && "ok"; // 論理積演算子は、右側がtruthyのときは右側の値を返す。これは"ok"となる
// OK = 0 && "ok"; // 論理積演算子は、左側がfalseyのときは左側の値を返す。これは0となる
// OK = "Hello" || "ok"; // 論理和演算子は、左側がtruthyのときは左側の値を返す。これは"Hello"となる
// OK = 0 || "Hello"; // 論理和演算子は、右側がfalseyのときは右側の値を返す。これは"ok"となる
//if (ok) {} // if文の中に入れることができる。
// if (OK) {
//     console.log(OK); // "ok"が表示される
// } else {
//     console.log("No"); // "No"が表示されない
// }    
// const userInput = ""; //応用として使うことができる。
// const userName = userInput || "User"; //空文字だった場合は、"User"文字が入る 
// console.log(userName); // "User"と表示される
// const userInput = "Susumu"; //応用として使うことができる。
// const userName = userInput || "User"; //空文字だった場合は、"User"文字が入る
// console.log(userName); // 今回は空文字でないため、"Susumu"と表示される

//６．演算子の優先順位はどうなっている
//ok = " " || "User";
// const userInput = " "; 
// const userName = userInput || "User";
// const x = 15; //数値型の変数の宣言
// ok = x > 10 && x < 20; // true(数値型の変数の宣言)
// ok = x === 10 || (x > 12 && userName); // 優先順位は,>一番最初に計算され、===が２番目に計算され　&&が先に評価その後、||が評価される。
// console.log(ok); // true(数値型の変数の宣言)
// if (ok) {
//     console.log("ok"); // "ok"が表示される
// }else {
//     console.log("No"); // "No"が表示されない
// }

//７．??を使って、default値を設定する方法
//let username = " " || "User"; // "User"のdefault値として設定できるが??も使うことができる。
//??を使うと、nullやundefinedのときだけdefault値を設定することができる。
//let username = "" ?? "User"; // これがnull合体演算子です。
//nullかundefinedのときだけdefault値を設定することができる。
//??は&&や||と一緒に使うことができない。
//let username = null ?? ("User" && 2); //()を使うと一緒に使うことができる。
// let username = "" || "User"; // "User"

//８．!を使って、真偽値のtrueとfalseを反転させる方法
// const userInput = ""; //応用として使うことができる。
// const userName = userInput || "User"; //空文字のときはfalseとなる。
// const x = 15;
// //ok = x > 10 && x < 20; // true(数値型の変数の宣言)
// ok = x === 10 || (x > 12 && userName); // 優先順位は,>一番最初に計算され、===が２番目に計算され　&&が先に評価その後、||が評価される。
// if (ok) {
//    // console.log("ok");
// }else{
//     console.log("No");
// }
// ok = !true; //false(反転させることができる)
// ok = !"hello"; //true(反転させることができる)
// ok = !x; //false(反転させることができる)
// ok = !!x; //true(反転させることができる)
// console.log("ok");


//９．ブロック文を使用して、複数の文や宣言を１つにまとめる方法（ブロックスコープ）
// const hello = "ha";
// {
//     //console.log(hello)//{}文の↑にはconsole.logは定義できないここは、deadzoueとなっている。    
//     const hello = "hello"; //外からはブロック文はアクセスができない
//     console.log(hello)
// }
// //console.log(hello); //参照ができない
// if (ok){} //｛｝の中はいくつもの文を使いたい時に実は使うもの。そのため、実は、１つの文なら｛｝は不要
// else{}

//１０．三項演算子
ok = ok ? "ok" :"No"; //みっつの項で挟むこれを三項演算子という
// okがtruthyのときは"ok"を返し
// okがfalseyのときは"No"を返す。




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


//<<<<<<< HEAD
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

//=======
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
// sayHi = () => {
//     console.log("hello"); // helloは表示される
// }   
//>>>>>>> 2d31ad5614fc6f67a733fa0d1e2d59ff11822ab7

// sayHi = () => {
//     console.log("hello"); // helloは表示される
// };

// sayHi = (name = "User", message) => `Hi ${name}! ${message}`; // テンプレートリテラルを修正
// console.log(sayHi(undefined, "hello")); // 冗長ではない

// sayHi = (name, message = "I'm strong.") => `Hi my name is ${name}! ${message}`; // テンプレートリテラルを修正
// console.log(sayHi("susumu")); // 冗長ではない