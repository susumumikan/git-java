let ok = false;
let maybeOK = false;
let maybeOK2 = true;
if (ok) {
    console.log("ok"); //trueが表示される
}else if (maybeOK) {
    console.log("maybeOK..."); //trueが表示される
}
else {
    console.log("out"); //trueが表示される
}

maybeOK2 = 1 === 1;
maybeOK2 = 1 !== 2;
maybeOK2 = 1 == 0;
maybeOK2 = 1 >= 2;
maybeOK2 = true && false; //falseが表示される
maybeOK2 = true || false; //論理積ｏｒ　trueが表示される
console.log(maybeOK2); //論理和ａｎｄ　trueが表示される
const userInput ="";
const uerName = userInput || "User"; //論理和　falseが表示される
console.log(uerName); //Userが表示される



