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
console.log(maybeOK2); //trueが表示される
