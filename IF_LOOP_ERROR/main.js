let ok = false;
let maybeOK = false;
let maybeOK2 = true;
if (ok) {
    console.log("ok"); // "ok"は表示されない
} else if (maybeOK) {
    console.log("maybeOK..."); // "maybeOK..."は表示されない
} else {
    console.log("out"); // "out"が表示される
}

maybeOK2 = 1 === 1; // true
maybeOK2 = 1 !== 2; // true
maybeOK2 = 1 == 0; // false
maybeOK2 = 1 >= 2; // false
maybeOK2 = true && false; // false
maybeOK2 = true || false; // true
console.log(maybeOK2); // true

const userInput = "";
const userName = userInput || "User"; // "User"
console.log(userName); // "User"

const x = 15;
ok = x > 10 && x < 20; // true
ok = x === 10 || (x > 12 && userName); // true
if (ok) {
    console.log("OK"); // "OK"が表示される
} else {
    console.log("No"); // 表示されない
}

let username = "" || "User"; // "User"

ok1 = !true; // false
ok1 = !"hello"; // true
ok1 = !0; // true
ok1 = !!x; // true
console.log(ok1); // false

const hello = "Hello!2";
{
    //console.log(hello); // "Hello!2"はデッドゾーンエラーになる
    const hello = "Hello!1";
    console.log(hello);
}

//if (ton) ton = true;//()の中は定義　｛｝の中はどんな分でもOK

ok3 = true; //  ok3はtrue
ok3 = ok ? "ok" : "no"; // 三項演算子という条件演算子を使った書き方
console.log(ok3); // "ok"が表示される

function vegetbleColor(vegetable){
    switch (vegetable){
        case "tomato":
            console.log("tomato is red.");
            break;
        case "pumpkin":
            console.log("pumpkin is oernge.");
            break;
        case "onion":
            console.log("onion is white.");
            break;
        default:
            console.log("unknown vegetable.");
    }
    // if (vegetable === "tomato") {
    // console.log("tomato is red.");
    // }else if (vegetable === "pumpkin") {
    //     console.log("pumpkin is oernge.");
    // }else if (vegetable === "onion") {
    //     console.log("onion is white.");
    // }
}
vegetbleColor("tomato"); // "tomato is red."が表示される
