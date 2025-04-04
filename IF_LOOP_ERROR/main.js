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




