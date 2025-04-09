//関数はオブジェクトの一種
console.log(add); // 関数宣言は巻き上げられる関数の参照ができる
function add(a, b) {
    return a + b;
}
console.log(add); // 関数の参照ができる
console.dir(add); // 関数の参照ができる

const newAdd = add; // 関数の参照を代入できる
console.log(newAdd(3, 4)); // 関数の参照ができる

let sayHi = function hi() { // 名前付き関数式
//let sayHi = function () { // 無名関数式    
    return "hi";
};
//hi(); // hi is not defined
console.log(sayHi()); // 関数式は巻き上げられないので、関数の参照ができない

const person = {
    mame: "susumu",
    sayHi: function() { // メソッド
        return "hi, " + this.mame; // thisは呼び出し元のオブジェクトを指す
    },
};    
console.log(person.sayHi()); // hi, susumu
